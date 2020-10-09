var express = require('express');
var router = express.Router();
var {addExpense,getExpense,deleteExpense,updateExpense} = require("../controller/userController");


router.post('/',addExpense)
router.get('/',getExpense)
router.delete('/:userId',deleteExpense)
router.put('/:userId',updateExpense)

module.exports = router;
