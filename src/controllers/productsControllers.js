//const path = require ("path");
//const fs = require ("fs");
//const rutaAlJson = path.resolve(__dirname, "../data/products.json");
//const productsJson = fs.readFileSync(rutaAlJson, {encoding: "utf-8"});
//const myProducts = JSON.parse(productsJson);

const Product = require("../data/models/Product");

//  list: (req, res)=>{
    //res.render ("products",{productos: myProducts})
//},

//    myProducts.forEach(product => {
 //   if (product.id == req.params.id) {

const productsController = {
    list: async (req, res) => {
        const products = await Product.find();
        res.render ("products",{productos: products});
    },

    detail: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render("detail", {producto: product});
    },

       form: (req, res)=>{
        res.render("form");
    },
       store: async (req,res)=>{
       await Product.create({...req.body, image: req.file.filename});
        return res.redirect("/productos");
    },

      modified: (req, res)=>{
        res.render("modified");
    },
      smodified: async (req,res)=>{
       await Product.findByIdAndUpdate({_id:req.params.id}, {
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        image: req.file.filename 
      });
        return res.redirect("/productos");
    },
    
      delete: (req, res)=>{
      res.render("delete");
    },
      sdelete: async (req,res)=>{
       await Product.findOneAndDelete({_id:req.params.id}, {...req.body, image: req.file.filename});
        return res.redirect("/productos");
    }
 };



module.exports = productsController;