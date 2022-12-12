const express = require('express')
const router = express.Router
const vegetable = require ('../models/vegetable')
const vegetableController = require ('../controller/vegetable_controller')

router.get("/", vegetableController.getAllVegetables);

module.exports=router