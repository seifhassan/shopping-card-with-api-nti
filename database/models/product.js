const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    name:{
        type: String, 
        required:true, 
    }, 
    description:{
        type: String, 
    }, 
    price:{
        type: Number, 
        required:true, 
    },  
})
const product = mongoose.model("product", productSchema)
module.exports = product