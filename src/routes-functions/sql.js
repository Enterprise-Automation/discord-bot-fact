const { Admin } = require('mongodb');
const mysql = require('mysql');
const Promise = require("promise")
const topic = require('../actions/topic');
const allTopics = require('../actions/allTopics');
const random = require('../actions/random');
const add = require('../actions/add');
const actions = require('../actions/actions');
const stats = require('../actions/stats');
const get = require('../actions/get');
const getById = require('../actions/getById');

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
                resolve({ "status": "success", "status_message": "Get owner", "discord_message": "https://tenor.com/view/who-me-han-solo-star-wars-confused-gif-17230765" });
                break;
            case "get":
                get(connection, params, resolve, reject)
                break;
            case "getById":
                getById(connection, params, resolve, reject)
                break;
            case "topic":
                topic(connection, params, resolve, reject)
                break;
            case "allTopics":
                allTopics(connection, params, resolve, reject)
                break;
            case "random":
                random(connection, params, resolve, reject)
                break;
            case "add":
                if (req.get("user") = "max56775684563") {
                    resolve({ "status": "success", "status_message": "Not Authorised", "discord_message": `User "${req.get("user")}" not authorised to add facts cos he is a neek` });
                    break;
                }
                add(connection, params, resolve, reject)
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
                actions(connection, params, resolve, reject)
                break;
            case "stats":
                stats(connection, params, resolve, reject)
                break;
        }
    })
}




