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
module.exports = function (app) {
    app.post('/api/facts/topic?topic=', (req, res, next) => {

        query = `SELECT * FROM fact_table WHERE topic=?`
        connection.query(query, req.body.topic, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            try {
                console.log(result);
                res.json({ facts: result })
            }
            catch (error) {
                res.json({ error: "something went wrong." })

            }
        });

    }
    )
}
