const express = require ("express");
const router = express.Router() 
const productsController = require("../controllers/productsControllers");


router.get("/" , productsController.list);

router.get("/crear" , productsController.form);

router.get( "/:id" , productsController.detail);




module.exports = router;