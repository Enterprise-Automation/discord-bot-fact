var express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs')
const path = require('path')

let router = express.Router()


fs.readdirSync(path.join(__dirname, "routes")).forEach(function (file) {
    if (file[0] === ".") {
        return;
    }
    require(path.join(__dirname, "routes", file))(app);
});
app.listen(3000, () => {
    console.log('Node server is running on port 3000');
})