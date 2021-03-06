
module.exports = function(db){
    {
        var aggregate = (query, callback) => {
            col.aggregate(query, callback);
        };

        var suffix = '_history';

        var getHistoryCollections = () => {
            return new Promise((resolve, reject) => {
                db.collections((err, collections) => {
                    if(err){
                        reject(err);
                    }
                    else{
                        var historyCollections = collections.filter((c)=>{
                            return c.s.name.indexOf(suffix)>-1;
                        });
                        resolve(historyCollections);
                    }
                });
            });
        };
        var getFindOnePromises = (collections) => {
            return new Promise((resolve, reject) => {
                var promises = collections.map((c) => {
                    var items = c.find().sort({"time":-1}).limit(1).toArray();
                    return items;
                });
                resolve(promises);
            });
        };
        return {
            new: (payload) => {
                return new Promise((resolve, reject) => {
                    if(!payload.source || !payload.targets || !payload.time) {
                        reject("Invalid payload. Properties 'source' and 'targets' required.");
                    }
                    db.collection(payload.source + suffix)
                      .insertOne(payload, function(err, result) {
                        if(err) {
                            reject(err)
                        }
                        else{
                            resolve();
                        }
                    });
                });
            },
            getMostRecent: () => {
                return getHistoryCollections()
                        .then(getFindOnePromises)
                        .then((promises) => {
                            return Promise.all(promises)
                                .then((items) => {
                                    return items.map((i) => {
                                        i = i[0];

                                        var allTargetsAlive = i.targets.every((t) => { return t.alive; });
                                        i.status = allTargetsAlive ? 'alive' : 'degraded';
                                        i.time = i.time.replace(/ /g,'').replace(/[^\x00-\x7F]/g, "");
                                        var secondsDiff = (new Date() - new Date(i.time)) / 1000;
                                        console.log(new Date(), new Date(i.time), secondsDiff);
                                        if(secondsDiff > 20){
                                            i.status = 'disconnected';
                                        }
                                        return i;
                                    });
                                });
                        })
                        .then((items) => {
                            return Promise.resolve(items.sort());
                        });
            }
        }
    }
}