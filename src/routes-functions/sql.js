const { Admin } = require('mongodb');
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
            case "owner":
                resolve({ "status": "success", "status_message": "Get owner", "discord_message": "Heisenberg" });
                break;
            // case "get":
            //     connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
            //         if (err) {
            //             reject(err)
            //         }
            //         console.log(result);
            //         resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });
            //     });
            //     break;
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
                    resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[getRandomInt(0, result.length)].fact });
                });

                break;
            case "insert":
                query = `INSERT INTO fact_table
                (fact,topic) 
                 VALUES (?, ?)`;
                params.shift()
                params.shift()
                var fact = params.join(" ").split("|")
                connection.query(query, [fact[0], fact[1]], function (err, result, fields) {
                    if (err) {
                        console.log(err)
                        reject(err)
                    }
                    resolve({ "status": "success", "status_message": "Fact added", "discord_message": "Succesfully inserted fact" });
                });
                break;
            case "delete":
                if (req.get("user") != "EAS-Harrison") {
                    resolve({ "status": "success", "status_message": "Not Authorised", "discord_message": "User not authorised to delete fact" });
                    break;
                }
                query = `DELETE FROM fact_table WHERE fact=? AND topic=?`
                params.shift()
                params.shift()
                var fact = params.join(" ").split("|")
                connection.query(query, [fact[0], fact[1]], function (err, result, fields) {
                    if (err) {
                        console.log(err)
                        reject(err)
                    }
                    resolve({ "status": "success", "status_message": "Fact deleted", "discord_message": "Succesfully deleted fact" });
                });
                break;
            case "actions":
                resolve({
                    "status": "success", "status_message": "Get all actions", "discord_message":

                        `'Actions'
                Fact By Topic: 'getByTopic topic'
                Insert New Fact: 'insert fact |topic'
                Owner: 'owner'
                Fact By Id: 'getById' 
                Random Fact: 'random'
                Delete Fact 'delete fact topic'` });
                break;
        }
        // connection.end()
    })
}




