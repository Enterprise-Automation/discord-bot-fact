const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.post('/api/facts/delete', (req, res, next) => {
        query = `DELETE FROM fact_table WHERE fact=? AND topic=?`;
        connection.query(query, [req.body.fact, req.body.topic], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ facts: result })

        });
    })
}