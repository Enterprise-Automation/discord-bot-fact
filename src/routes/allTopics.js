const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});
function arrayToString(array) {

    let stringArray = "Topic: <topic> - number of facts with topic\n---------------------------\n";

    for (let i = 0; i <= array.length - 1; i++) {
        stringArray = stringArray + "Topic: " + array[i]["topic"] + " - " + array[i]["count(*)"] + "\n"
    }

    return stringArray;
}
connection.connect();
module.exports = function (app) {
    app.get('/api/facts/allTopics', (req, res, next) => {


        // sql to get all facts
        connection.query(`SELECT topic, count(*) FROM fact_table GROUP BY topic`, function (err, result) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            result = arrayToString(result)
            res.json({ result })
        })
    })
}
