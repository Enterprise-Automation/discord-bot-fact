// Bot API action constants
module.exports = Object.freeze({
    identifier: "facts",
    actions: ["getById", "topic", "add", "delete", "random", "owner", "actions"],
    schema: {
        topic: {
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
        // get: {
        //     arg_count: 0,
        //     args: []
        // },
        owner: {
            arg_count: 0,
            args: []
        },
        add: {
            arg_count: 0,
            args: []
        },
        delete: {
            arg_count: 0,
            args: []
        },
        getById: {
            arg_count: 1,
            args: [
                {
                    name: "name",
                    type: "number",
                    min: 1,
                    max: 15,
                    pattern: "alphanumeric"
                }
            ]
        },
        random: {
            arg_count: 0,
            args: []
        },
        actions: {
            arg_count: 0,
            args: []
        },
    }
});