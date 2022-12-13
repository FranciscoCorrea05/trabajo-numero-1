const path = require ("path");
const fs = require ("fs");
const rutaAlJson = path.resolve(__dirname, "../data/products.json");
const productsJson = fs.readFileSync(rutaAlJson, {encoding: "utf-8"});
const myProducts = JSON.parse(productsJson);

const productsController = {
    list: (req, res)=>{
        res.render ("products",{productos: myProducts})
    },
    detail: (req, res)=>{
        res.send ("producto con nombre:" + req.params.nombre);
    },
       
}




module.exports = productsController;