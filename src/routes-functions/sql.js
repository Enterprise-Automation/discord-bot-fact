const mysql = require('mysql');
const Promise = require("promise")

function getRandomInt(max) { return Math.floor(Math.random() * max); } console.log(getRandomInt(3));
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
exports.func = req => {
    return new Promise((resolve, reject) => {

        let params = req.params.command.split(",");

        let query = null
        console.log("request = " + params);



        switch (params[1]) {
            case "get":
                connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    console.log(result);
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });
                });
                break;
            case "getById":
                query = `SELECT * FROM fact_table WHERE id=?`;
                connection.query(query, params[2], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });

                });

                break;
            case "getByTopic":
                query = `SELECT * FROM fact_table WHERE topic=?`
                connection.query(query, params[2], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });

                });

                break;
            case "random":
                query = `SELECT * FROM fact_table WHERE id=?`;
                connection.query(query, params[2], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[getRandomInt].fact });

                });

                break
        }
        // connection.end()
    })
}




