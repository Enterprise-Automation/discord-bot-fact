const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/facts/add', (req, res, next) => {
        query = `INSERT INTO fact_table
        (fact,topic) 
         VALUES (?, ?)`;
        params.shift()
        params.shift()
        var fact = params.join(" ")
        connection.query(query, [fact[0], fact[1].trim()], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ facts: result })

        });
    })
}
