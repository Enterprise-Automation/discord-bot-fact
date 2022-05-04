let query = ""
module.exports = function (connection, params, resolve, reject) {
    query = `INSERT INTO fact_table
    (fact,topic) 
     VALUES (?, ?)`;
    params.shift()
    params.shift()
    var fact = params.join(" ").split("|")
    connection.query(query, [fact[0], fact[1].trim()], function (err, result, fields) {
        if (err) {
            console.log(err)
            reject(err)
        }
        resolve({ "status": "success", "status_message": "Fact added", "discord_message": "Succesfully added fact" });
    });

}