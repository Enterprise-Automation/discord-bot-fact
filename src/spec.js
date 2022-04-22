// Bot API action constants
module.exports = Object.freeze({
    identifier: "facts",
    actions: ["get", "getById", "getByTopic", "newFact", "insert", "delete"],
    schema: {
        getByTopic: {
            arg_count: 1,
            args: [
                {
                    name: "name",
                    type: "string",
                    min: 3,
                    max: 15,
                    pattern: "alphanumeric"
                }
            ]
        },
        get: {
            arg_count: 0,
            args: []
        },
        insert: {
            arg_count: 1,
            args: [
                {
                    name: "name",
                    type: "string",
                    min: 3,
                    max: 15,
                    pattern: "alphanumeric"
                }
            ]
        },
        getById: {
            arg_count: 1,
            args: [
                {
                    name: "name",
                    type: "integer",
                    min: 1,
                    max: 15,
                    pattern: "alphanumeric"
                }
            ]
        },
        delete: {
            arg_count: 1,
            args: [
                {
                    name: "name",
                    type: "string",
                    min: 3,
                    max: 15,
                    pattern: "alphanumeric"
                }
            ]
        }
    }
});