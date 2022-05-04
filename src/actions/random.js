let query = ""
module.exports = function (connection, params, resolve, reject) {
    query = `SELECT * FROM fact_table`;
    connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
        if (err) {
            reject(err)
        }
        resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[getRandomInt(0, result.length)].fact });
    });
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}