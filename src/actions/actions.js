let query = ""
module.exports = function (connection, params, resolve, reject) {
    resolve({
        "status": "success", "status_message": "Get all actions", "discord_message":
            `

       --------------------------
Actions
--------------------------
Fact By Topic: 'topic <topic>'

Insert New Fact: 'add <fact>|<topic>'

Owner: 'owner' 

Random Fact: 'random'

Delete Fact (Harrison only) 'delete <fact>|<topic>'

Get all topics: allTopics

Get stats: stats` });
}