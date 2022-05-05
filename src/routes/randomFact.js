const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
connection.connect();
module.exports = function (app) {
    app.get('/api/facts/random', (req, res, next) => {


        // sql to get all facts
        connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ fact: result[getRandomInt(0, result.length)].fact })

        });

    });
}