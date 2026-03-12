import {Schema,model} from 'mongoose'
/*create product schema(.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required))*/
     const productSchema = new Schema({
        productId:{
            type:Number,
            required:[true,"productId is required"],
        },
        productName:{
            type:String,
            required:[true,"product name is required"],
        },
        price:{
            type:Number,
            required:[true,"price is required"],
            min:[10000,"minprice is 10000"],
            max:[50000,"maxprice is 50000"],
        },
        brand:{
            type:String,
            required:[true,"brand is required"]
        }
    },
        {
    versionKey: false,
    timestamps:true,
})
     //generate a model
     export const productModel= model("product",productSchema)