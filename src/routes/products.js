const express = require ("express");
const router = express.Router() 
const productsController = require("../controllers/productsControllers");


router.get("/" , productsController.list);

router.get( "/:nombre" , productsController.detail);




module.exports = router;