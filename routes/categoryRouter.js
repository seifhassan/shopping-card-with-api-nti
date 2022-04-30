const router = require("express").Router()
const category = require("../app/controller/category")

//router.get('/',product.getAllproducts)

router.post('/addcat', category.addCategory)
router.get('/getAllCat', category.getAllCategories)


module.exports = router