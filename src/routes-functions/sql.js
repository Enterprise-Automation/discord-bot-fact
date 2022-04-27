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
                resolve({ "status": "success", "status_message": "Get owner", "discord_message": "https://tenor.com/view/walter-white-walter-hartwell-white-sr-heisenberg-bryan-cranston-gif-16636350" });
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
            // case "getById":
            //     query = `SELECT * FROM fact_table WHERE id=?`;
            //     connection.query(query, params[2], function (err, result, fields) {
            //         if (err) {
            //             reject(err)
            //         }

            //         console.log(result);
            //         resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });

            //     });

            // break;
            case "topic":
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
                        reject({ "status": "failed", "status_message": "can't resolve query", "discord_message": "Can't find a fact with the topic of " + params[2] + ".Would you like to add one using ____|" + params[2] });
                    }
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
            case "add":
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
                    resolve({ "status": "success", "status_message": "Fact added", "discord_message": "Succesfully added fact" });
                });
                break;
            case "delete":
                if (req.get("user") != "EAS-Harrison") {
                    resolve({ "status": "success", "status_message": "Not Authorised", "discord_message": `User "${req.get("user")}" not authorised to delete fact` });
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
                Fact By Topic(JavaScript,History,Animals,EAS,Geography): 'topic topic'
                Insert New Fact: 'add fact |topic'
                Owner: 'owner' 
                Random Fact: 'random'
                Delete Fact (Harrison only) 'delete fact |topic'` });
                break;
        }
        // connection.end()
    })
}




