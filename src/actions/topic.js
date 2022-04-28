let query = ""
module.exports = function (connection, params, resolve, reject) {
    query = `SELECT * FROM fact_table WHERE topic=?`
    connection.query(query, params[2], function (err, result, fields) {
        if (err) {
            reject(err)
        }
        try {
            console.log(result);
            resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[getRandomInt(0, result.length)].fact });
        }
        catch (error) {
            reject({ "status": "failed", "status_message": "can't resolve query", "discord_message": "Can't find a fact with the topic of " + params[2] + ".To view the list of possible topics in use, please use the allTopics function.You could add a fact using <yourfact>|" + params[2] });
        }
    });
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}