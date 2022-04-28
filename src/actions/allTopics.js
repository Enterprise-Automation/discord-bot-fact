let query = ""
module.exports = function (connection, params, resolve, reject) {
    query = `SELECT topic, count(*) FROM fact_table GROUP BY topic`
    connection.query(query, function (err, result) {
        if (err) {
            reject(err)
        }
        console.log(arrayToString(result))
        resolve({ "status": "success", "status_message": "Get owner", "discord_message": arrayToString(result) + "Feel free to add any facts to the database :)" });
    })
    function arrayToString(array) {

        let stringArray = "Topic: <topic> - number of facts with topic\n---------------------------\n";

        for (let i = 0; i <= array.length - 1; i++) {
            stringArray = stringArray + "Topic: " + array[i]["topic"] + " - " + array[i]["count(*)"] + "\n"
        }

        return stringArray;
    }
}