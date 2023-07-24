const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    
    name: String,
    category: String,
    image: String,
    description: String,
    price: String, 


});


let productModel = mongoose.models.product_sec || mongoose.model("product_sec", productSchema);



module.exports = productModel 

