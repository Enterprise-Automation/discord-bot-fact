let query = ""
module.exports = function (connection, params, resolve, reject) {
    query = `SELECT * FROM fact_table WHERE id=?`;
    connection.query(query, params[2], function (err, result, fields) {
        if (err) {
            reject(err)
        }

        console.log(result);
        resolve({ "status": "success", "status_message": "sending back fact", "discord_message": result[0].fact });

    });
}