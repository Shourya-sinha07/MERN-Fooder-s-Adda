const mongoose=require('mongoose')
const {Schema}=mongoose;
const OrderSchema=Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    
    order_data:{
        type:Array,
        required:true
    },
    order_date:{
        type:Date,
        default:Date.now
    },
    
    });
    module.exports=mongoose.model('order',OrderSchema)