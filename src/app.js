const express = require ("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "../public")));


const products = require("./routes/products");
app.use("/productos", products);
const main = require("./routes/main");
app.use("/main", main);
const users = require("./routes/users");
app.use("/users", users);

app.use((req, res, next) => {
    res.render("404-page");

});



app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"));