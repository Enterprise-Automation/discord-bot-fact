const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
let factRepo = {
    get: function (resolve, reject) {

        connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    getById: function (id, resolve, reject) {

        connection.query(`SELECT * FROM fact_table WHERE id=${id}`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    getByTopic: function (topic, resolve, reject) {

        connection.query(`SELECT * FROM fact_table WHERE topic="${topic}"`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    insert: function (newFact, resolve, reject) {
        const myArray = newFact.split("+");
        console.log(myArray[0]);
        connection.query(`INSERT fact_table 
        (fact, topic) 
        VALUES
          ('${myArray[0]}', '${myArray[1]}')`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });
    },
    getRandom: function (resolve, reject) {
        let r = connection.query(`SELECT COUNT(id) FROM fact_table`, function (err, result, fields) {
            console.log(result)
            return 1;
        });
        console.log(r)
    },
    delete: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {


            }
        })
    },

}


module.exports = factRepo