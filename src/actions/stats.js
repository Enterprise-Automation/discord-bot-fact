const os = require('os');
var process = require('process');
let query = ""
module.exports = function (connection, params, resolve, reject) {
    var memUsed = process.memoryUsage().heapUsed
    const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`
    var totalMem = process.memoryUsage().heapTotal
    resolve({
        "status": "success", "status_message": "sending back stats", "discord_message": `
        Memory Used in process: ${formatMemoryUsage(memUsed)} 
Memory Total allowed in process: ${formatMemoryUsage(totalMem)} 
CPUS: ${os.cpus().length}
Total System Memory: ${formatMemoryUsage(os.totalmem())}
Total Free Memory: ${formatMemoryUsage(os.freemem())}
        `
    });
}