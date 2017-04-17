
module.exports = function(aggregate, insertOne){
    {
        return {
            new: (payload) => {
                return new Promise((resolve, reject) => {
                    if(!payload.source || !payload.targets) {
                        reject("Invalid payload. Properties 'source' and 'targets' required.");
                    }
                    insertOne(payload, function(err, result) {
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
                return new Promise((resolve, reject) => {
                    aggregate([
                        {$group: {
                                "_id": "$source",
                                name: {$last: '$name'},
                                data: {$last: '$targets'},
                                date: {$last: '$time'},
                            }},
                        {$project: {
                                "source": "$_id",
                                "targets": "$data",
                                "name": "$name",
                                "time": "$date"
                            }},
                        {$sort: {
                                'source': 1,
                                'date': -1
                            }}
                    ], function(err, result) {
                        if(err){
                            reject(err);
                        }
                        else{
                            result = result.map((r) => {
                                var allTargetsAlive = r.targets.every((t) => { return t.alive; });
                                r.status = allTargetsAlive ? 'alive' : 'problem';
                                return r;
                            });
                            resolve(result);
                        }
                    })
                });
            }
        }
    }
}