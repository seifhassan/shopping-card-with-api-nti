const productModel = require("../../database/models/product")

class product{
    static addproduct = async(req,res)=>{
        const {name, description, price, categoryId} = req.body;
        try{
           await productModel.create({name, description, price, categoryId}).then((prod) => {
               return res.status(200).send({
                   product: prod
               })
           })
        }
        catch(e){
            res.status(500).send({
                data:e,
                message:e.message
            })
        }
    }

    static getAllProducts = async(req, res) => {
        try {
            await productModel.find({}).then((products) => {
                return res.status(200).send({products})
            })
        } catch(e) {
            res.status(500).send({                      
                data:e,
                message:e.message
            })
        }
    }
}
module.exports = product