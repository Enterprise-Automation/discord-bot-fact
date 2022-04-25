const mysql = require('mysql');
const Promise = require("promise")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
                query = `SELECT * FROM fact_table`;
                connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[getRandomInt(0, result.length)].fact });

                });

                break;
            case "insert":


                query = `INSERT INTO fact_table
        (fact, topic, ) 
        VALUES
          (?, ?)`;

                connection.query(query, [params[1], params[2]], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    resolve({ "status": "success", "status_message": "getting fact", "discord_message": "insert" });
                });
                break;
        }
        // connection.end()
    })
}




