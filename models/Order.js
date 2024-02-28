const mongoose = require('mongoose')

const OrderSchema  = new mongoose.Schema({
    email : {type :String},
    products :[{
        productId: {type:String},
        quantity: {type:Number,default:1}
    }
    ],
    address:{type:String,required:true},
    amount :{type:String,required:true},
    status :{type:String,default:'pending',required:true},

},{timestamps: true});
mongoose.models = {};

export default mongoose.model("Order",OrderSchema)