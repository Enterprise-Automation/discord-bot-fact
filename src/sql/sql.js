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
        console.log("params 0 = " + params);



        switch (params[0]) {
            case "get":
                connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    resolve(result);
                });
                break;
            case "getById":
                query = `SELECT * FROM fact_table WHERE id=?`;
                connection.query(query, params[1], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    resolve(result);

                });

                break;
            case "getByTopic":
                query = `SELECT * FROM fact_table WHERE topic=?`
                connection.query(query, params[1], function (err, result, fields) {
                    if (err) {
                        reject(err)
                    }
                    resolve(result);

                });

                break;
            default:
                query = `SELECT COUNT(id) FROM fact_table`
                connection.query(query, function (err, result, fields) {
                    console.log(result)
                });
                console.log(r)
        }
    })
}




// let factRepo = {
//     get: function (resolve, reject) {

//         connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result);
//         });

//     },
//     getById: function (id, resolve, reject) {

//         connection.query(`SELECT * FROM fact_table WHERE id=${id}`, function (err, result, fields) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result);
//         });

//     },
//     searchTopic: function (topic, resolve, reject) {

//         connection.query(`SELECT * FROM fact_table WHERE topic="${topic}"`, function (err, result, fields) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result);
//         });

//     },
//     newFact: function (newFact, resolve, reject) {
//         const myArray = newFact.split("+");
//         console.log(myArray[0]);
//         connection.query(`INSERT fact_table 
//         (fact, topic) 
//         VALUES
//           ('${myArray[0]}', '${myArray[1]}')`, function (err, result, fields) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result);
//         });
//     },
//     getRandom: function (resolve, reject) {
//         let r = connection.query(`SELECT COUNT(id) FROM fact_table`, function (err, result, fields) {
//             console.log(result)
//             return 1;
//         });
//         console.log(r)
//     },
//     delete: function (id, resolve, reject) {
//         fs.readFile(FILE_NAME, function (err, data) {
//             if (err) {
//                 reject(err)
//             } else {


//             }
//         })
//     },

// }


// module.exports = factRepo