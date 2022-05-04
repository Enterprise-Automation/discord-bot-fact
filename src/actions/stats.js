const os = require('os');
var process = require('process');
const disk = require('diskusage');


let query = ""
module.exports = function (connection, params, resolve, reject) {
    var memUsed = process.memoryUsage().heapUsed
    var totalMem = process.memoryUsage().heapTotal

    var ut_sec = Math.floor(os.uptime());
    var ut_min = Math.floor(ut_sec / 60);
    var ut_hour = Math.floor(ut_min / 60);

    ut_sec = ut_sec % 60
    ut_min = ut_min % 60
    ut_hour = ut_hour % 60


    let diskFree;
    let diskTotal;

    disk.check('/', function (err, info) {
        diskFree = info.free;
        diskTotal = info.total;
    });




    resolve({
        "status": "success", "status_message": "sending back stats", "discord_message": `
        Memory Used in process: ${formatBytes(memUsed)} 
Memory Total allowed in process: ${formatBytes(totalMem)} 

CPUS: ${os.cpus().length}
Total System Memory: ${formatBytes(os.totalmem())}
Total Free Memory: ${formatBytes(os.freemem())}

Up time: ${ut_hour} Hour(s) ${ut_min} minute(s) and ${ut_sec} seconds

Disk free ${formatBytes(diskFree)}
Disk total ${formatBytes(diskTotal)}
Disk used ${formatBytes(diskTotal - diskFree)}
`
    });
}
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
