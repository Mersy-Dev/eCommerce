const productModel = require('../models/productModel');


const uploadProduct = async(req, res,) => {
    console.log(req.body);
        const data = await productModel(req.body)
        const  datasave = await data.save()
    
    res.send({message : "Uploaded Successfully"})

}

const product = async(req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
}


module.exports = {uploadProduct, product }
