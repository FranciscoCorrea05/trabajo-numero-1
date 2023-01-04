const express = require ("express");
const app = express();
const path = require("path");
const dbConnect = require("./config/mongo");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "../public")));


const products = require("./routes/products");
app.use("/productos", products);
const main = require("./routes/main");
app.use("/main", main);
const users = require("./routes/users");
app.use("/users", users);
//const dbConnect = require("./config/mongo");
//const { default: mongoose } = require("mongoose"); 

app.use((req, res, next) => {
    res.render("404-page");

});

app.use(express.urlencoded({extended:true}));

dbConnect();


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"));