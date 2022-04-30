const categoryModel = require("../../database/models/category")

class category {
    static addCategory = async(req,res)=>{
        const {name} = req.body;
        try{
          await categoryModel.create({name}).then((cat) => {
              return res.status(200).send({category: cat});
          })
        }
        catch(e){
            res.status(500).send({
                data:e,
                message:e.message
            })
        }
    }

    static getAllCategories = async(req, res) => {
        try {
            await categoryModel.find({}).then((categories) => {
                return res.status(200).send({categories})
            })
        } catch(e) {
            res.status(500).send({                      
                data:e,
                message:e.message
            })
        }
    }
}

module.exports = category