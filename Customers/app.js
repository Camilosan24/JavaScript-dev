const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/index");
const sequelize = require("./src/util/database");


const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.set("port", 4000);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

sequelize.sync()
.then(result =>{
    console.log("database connected")
}).catch(err =>{
    console.log(err)
});

app.listen(app.get("port"), () => {
	console.log("Server on port", app.get("port"));
});
