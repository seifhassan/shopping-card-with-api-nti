const router = require("express").Router()
const product = require("../app/controller/product")

//router.get('/',product.getAllproducts)

router.post('/addproduct', product.addproduct)
router.get('/getAllProducts', product.getAllProducts)


module.exports = router