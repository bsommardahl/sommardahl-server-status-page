
module.exports = {
    save: (payload) => {
        console.log(payload);
    },
    getMostRecent: () => {
        return Promise.resolve([{
            source: '00:0c:29:27:09:3a',
            status: 'ok',
            time: '2017-04-16T22:45:57.844Z',
            config: {
                cronTime: '00 30 11 * * 1-5',
                timeZone: 'America/Chicago'
            },
            targets: [
                {
                    host: '192.168.1.1',
                    alive: true,
                    output: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=128 time=3.74 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 3.745/3.745/3.745/0.000 ms\n',
                    time: 3.74,
                    min: '3.745',
                    max: '3.745',
                    avg: '3.745',
                    stddev: '0.000',
                    numeric_host: '192.168.1.1',
                    name: 'Byron\'s Firewall'
                },
                {
                    host: '192.168.1.50',
                    alive: true,
                    output: 'PING 192.168.1.50 (192.168.1.50) 56(84) bytes of data.\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=128 time=4.84 ms\n\n--- 192.168.1.50 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 4.844/4.844/4.844/0.000 ms\n',
                    time: 4.84,
                    min: '4.844',
                    max: '4.844',
                    avg: '4.844',
                    stddev: '0.000',
                    numeric_host: '192.168.1.50',
                    name: 'Olwing\'s Router'
                },
                {
                    host: '192.168.50.1',
                    alive: true,
                    output: 'PING 192.168.50.1 (192.168.50.1) 56(84) bytes of data.\n64 bytes from 192.168.50.1: icmp_seq=1 ttl=128 time=5.37 ms\n\n--- 192.168.50.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 5.379/5.379/5.379/0.000 ms\n',
                    time: 5.37,
                    min: '5.379',
                    max: '5.379',
                    avg: '5.379',
                    stddev: '0.000',
                    numeric_host: '192.168.50.1',
                    name: 'Tegucigalpa'
                },
                {
                    host: 'google.com',
                    alive: true,
                    output: 'PING google.com (172.217.7.142) 56(84) bytes of data.\n64 bytes from 172.217.7.142: icmp_seq=1 ttl=128 time=57.8 ms\n\n--- google.com ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 57.833/57.833/57.833/0.000 ms\n',
                    time: 57.8,
                    min: '57.833',
                    max: '57.833',
                    avg: '57.833',
                    stddev: '0.000',
                    numeric_host: '172.217.7.142',
                    name: 'google.com'
                }]
            },
            {
            source: '00:0c:29:27:09:3b',
            time: '2017-04-16T22:45:57.844Z',
            status: 'ok',
            config: {
                cronTime: '00 30 11 * * 1-5',
                timeZone: 'America/Chicago'
            },
            targets: [
                {
                    host: '192.168.1.1',
                    alive: true,
                    output: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=128 time=3.74 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 3.745/3.745/3.745/0.000 ms\n',
                    time: 3.74,
                    min: '3.745',
                    max: '3.745',
                    avg: '3.745',
                    stddev: '0.000',
                    numeric_host: '192.168.1.1',
                    name: 'Byron\'s Firewall'
                },
                {
                    host: '192.168.1.50',
                    alive: true,
                    output: 'PING 192.168.1.50 (192.168.1.50) 56(84) bytes of data.\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=128 time=4.84 ms\n\n--- 192.168.1.50 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 4.844/4.844/4.844/0.000 ms\n',
                    time: 4.84,
                    min: '4.844',
                    max: '4.844',
                    avg: '4.844',
                    stddev: '0.000',
                    numeric_host: '192.168.1.50',
                    name: 'Olwing\'s Router'
                },
                {
                    host: '192.168.50.1',
                    alive: true,
                    output: 'PING 192.168.50.1 (192.168.50.1) 56(84) bytes of data.\n64 bytes from 192.168.50.1: icmp_seq=1 ttl=128 time=5.37 ms\n\n--- 192.168.50.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 5.379/5.379/5.379/0.000 ms\n',
                    time: 5.37,
                    min: '5.379',
                    max: '5.379',
                    avg: '5.379',
                    stddev: '0.000',
                    numeric_host: '192.168.50.1',
                    name: 'Tegucigalpa'
                },
                {
                    host: 'google.com',
                    alive: true,
                    output: 'PING google.com (172.217.7.142) 56(84) bytes of data.\n64 bytes from 172.217.7.142: icmp_seq=1 ttl=128 time=57.8 ms\n\n--- google.com ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 57.833/57.833/57.833/0.000 ms\n',
                    time: 57.8,
                    min: '57.833',
                    max: '57.833',
                    avg: '57.833',
                    stddev: '0.000',
                    numeric_host: '172.217.7.142',
                    name: 'google.com'
                }]
            },
            {
            source: '00:0c:29:27:09:3c',
            time: '2017-04-16T22:45:57.844Z',
            status: 'ok',
            config: {
                cronTime: '00 30 11 * * 1-5',
                timeZone: 'America/Chicago'
            },
            targets: [
                {
                    host: '192.168.1.1',
                    alive: true,
                    output: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=128 time=3.74 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 3.745/3.745/3.745/0.000 ms\n',
                    time: 3.74,
                    min: '3.745',
                    max: '3.745',
                    avg: '3.745',
                    stddev: '0.000',
                    numeric_host: '192.168.1.1',
                    name: 'Byron\'s Firewall'
                },
                {
                    host: '192.168.1.50',
                    alive: true,
                    output: 'PING 192.168.1.50 (192.168.1.50) 56(84) bytes of data.\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=128 time=4.84 ms\n\n--- 192.168.1.50 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 4.844/4.844/4.844/0.000 ms\n',
                    time: 4.84,
                    min: '4.844',
                    max: '4.844',
                    avg: '4.844',
                    stddev: '0.000',
                    numeric_host: '192.168.1.50',
                    name: 'Olwing\'s Router'
                },
                {
                    host: '192.168.50.1',
                    alive: true,
                    output: 'PING 192.168.50.1 (192.168.50.1) 56(84) bytes of data.\n64 bytes from 192.168.50.1: icmp_seq=1 ttl=128 time=5.37 ms\n\n--- 192.168.50.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 5.379/5.379/5.379/0.000 ms\n',
                    time: 5.37,
                    min: '5.379',
                    max: '5.379',
                    avg: '5.379',
                    stddev: '0.000',
                    numeric_host: '192.168.50.1',
                    name: 'Tegucigalpa'
                },
                {
                    host: 'google.com',
                    alive: true,
                    output: 'PING google.com (172.217.7.142) 56(84) bytes of data.\n64 bytes from 172.217.7.142: icmp_seq=1 ttl=128 time=57.8 ms\n\n--- google.com ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 57.833/57.833/57.833/0.000 ms\n',
                    time: 57.8,
                    min: '57.833',
                    max: '57.833',
                    avg: '57.833',
                    stddev: '0.000',
                    numeric_host: '172.217.7.142',
                    name: 'google.com'
                }]
            },
            {
            source: '00:0c:29:27:09:3d',
            time: '2017-04-16T22:45:57.844Z',
            status: 'ok',
            config: {
                cronTime: '00 30 11 * * 1-5',
                timeZone: 'America/Chicago'
            },
            targets: [
                {
                    host: '192.168.1.1',
                    alive: true,
                    output: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=128 time=3.74 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 3.745/3.745/3.745/0.000 ms\n',
                    time: 3.74,
                    min: '3.745',
                    max: '3.745',
                    avg: '3.745',
                    stddev: '0.000',
                    numeric_host: '192.168.1.1',
                    name: 'Byron\'s Firewall'
                },
                {
                    host: '192.168.1.50',
                    alive: true,
                    output: 'PING 192.168.1.50 (192.168.1.50) 56(84) bytes of data.\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=128 time=4.84 ms\n\n--- 192.168.1.50 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 4.844/4.844/4.844/0.000 ms\n',
                    time: 4.84,
                    min: '4.844',
                    max: '4.844',
                    avg: '4.844',
                    stddev: '0.000',
                    numeric_host: '192.168.1.50',
                    name: 'Olwing\'s Router'
                },
                {
                    host: '192.168.50.1',
                    alive: true,
                    output: 'PING 192.168.50.1 (192.168.50.1) 56(84) bytes of data.\n64 bytes from 192.168.50.1: icmp_seq=1 ttl=128 time=5.37 ms\n\n--- 192.168.50.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 5.379/5.379/5.379/0.000 ms\n',
                    time: 5.37,
                    min: '5.379',
                    max: '5.379',
                    avg: '5.379',
                    stddev: '0.000',
                    numeric_host: '192.168.50.1',
                    name: 'Tegucigalpa'
                },
                {
                    host: 'google.com',
                    alive: true,
                    output: 'PING google.com (172.217.7.142) 56(84) bytes of data.\n64 bytes from 172.217.7.142: icmp_seq=1 ttl=128 time=57.8 ms\n\n--- google.com ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 57.833/57.833/57.833/0.000 ms\n',
                    time: 57.8,
                    min: '57.833',
                    max: '57.833',
                    avg: '57.833',
                    stddev: '0.000',
                    numeric_host: '172.217.7.142',
                    name: 'google.com'
                }]
            }]);
    },
};