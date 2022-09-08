const mdb = require('mongodb');
const mongoose = require('mongoose');
const orderSchema= mongoose.Schema({


customer_id : {
           type: mongoose.Schema.Types.ObjectId,
           ref : 'customer' },

product_id : {
           type: mongoose.Schema.Types.ObjectId,
           ref : 'product' },
tprice : Number,
review : Number,
odate  : Date

});

module.exports= mongoose.model("order",orderSchema);