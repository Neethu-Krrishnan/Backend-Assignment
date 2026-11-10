const express = require('express');
const router = express.Router();
const inventorycontroller = require('../controllers/inventorycontroller');
const validateInventory = require('../middlewares/validateInventory');
const errorHandler = require('../middlewares/errorHandler');
const inventoryData = require('../model/inventoryData');

router.post('/',inventorycontroller.createInventory);
router.get('/',inventorycontroller.getAllProducts);
router.put('/:id',inventorycontroller.updateProductById);
router.delete('/:id',inventorycontroller.deleteProductById);

module.exports = router;