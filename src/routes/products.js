const express = require ("express");
const router = express.Router(); 

const uploadFile = require("../middlewares/uploadFile");

const productsController = require("../controllers/productsControllers");
 


router.get("/" , productsController.list);

router.get("/crear" , productsController.form);
router.post("/crear" , uploadFile.single("productImage"),productsController.store);

router.get("/modified/:id" , productsController.modified);
router.post("/modified/:id" , uploadFile.single("productImage"),productsController.smodified);

router.get("/delete/:id" , productsController.delete);
router.post("/delete/:id" , uploadFile.single("productImage"),productsController.sdelete);

router.get( "/:id" , productsController.detail);




module.exports = router; 