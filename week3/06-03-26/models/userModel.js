import {Schema,model,Types} from 'mongoose';
//create Cart sCHEMA(PRODUCT,COUNT)
const cartSchema = new Schema({
    product: {
        type: Types.ObjectId,//if types is not imported then write schema.types.id
        ref: 'Product',//name of the product model
    
    },
    count: {
        type: Number,
        default : 1//here when count is added the default value will be 1
    }
});

//create User Schema(username,password,email,age)
const userSchema = new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"minLength of username is 4 chars"],
        maxLength:[6,"maxLength of username is 6 chars"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already existed"] 
    },
    age:{
        type:Number,
    },
    cart : [cartSchema]//cartschema is obj with 2 properties it can accept only {product:"",count}
},

{
    versionKey: false,
    timestamps:true,
},);

//Generate UserModel
export const UserModel= model("user",userSchema);