var process = require('process');

let query = ""
module.exports = function (connection, params, resolve, reject) {
    var memUsed = process.memoryUsage().heapUsed / 1024 / 1024
    var totalMem = process.memoryUsage().heapTotal / 1024 / 1024
    resolve({
        "status": "success", "status_message": "sending back stats", "discord_message": `
    Memory Used: ${Math.round(memUsed * 100) / 100} MB
Memory Total: ${Math.round(totalMem * 100) / 100} MB 
Memory Remaining: ${Math.round((totalMem - memUsed) * 100) / 100} MB`
    });
    console.log(`
Memory Used: ${Math.round(memUsed * 100) / 100} MB
Memory Total: ${Math.round(totalMem * 100) / 100} MB 
Memory Remaining: ${Math.round((totalMem - memUsed) * 100) / 100} MB`)
}