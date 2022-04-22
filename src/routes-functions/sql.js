const mysql = require('mysql');
const Promise = require("promise")


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



        switch (params[0]) {
            case "get":
                connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    console.log(result);
                    resolve(`"status": "success", "status_message": "sending back fact", "discord_message": "` + result[0].HTML_URL + `"`);
                });
                break;
            case "getById":
                query = `SELECT * FROM fact_table WHERE id=?`;
                connection.query(query, params[1], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve(`"status": "success", "status_message": "sending back fact", "discord_message": "` + result[0].HTML_URL + `"`);

                });

                break;
            case "getByTopic":
                query = `SELECT * FROM fact_table WHERE topic=?`
                connection.query(query, params[1], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }

                    console.log(result);
                    resolve(`"status": "success", "status_message": "sending back fact", "discord_message": "` + result[0].HTML_URL + `"`);

                });

                break;
            case "random":
                query = `SELECT COUNT(id) FROM fact_table`
                connection.query(query, function (err, result, fields) {
                    console.log(result)
                });
                console.log(r)
                break
        }
        // connection.end()
    })
}




