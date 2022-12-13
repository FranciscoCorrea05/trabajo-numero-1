const express = require ("express");
const router = express.Router() 
const mainController = require("../controllers/mainControllers");


router.get("/" , mainController.list);

module.exports = router;