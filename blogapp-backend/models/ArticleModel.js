import {Schema,model,Types} from 'mongoose'
const commentSchema = new Schema({
    user:{
        type:Types.ObjectId,//objectId means _id
        ref:"user",
        required:[true,"User Id is required"]
    },
    comment:{
        type:String,
        required:[true,"Enter comment"]
        
    }
})
const articleSchema = new Schema({
    author:{
        type:Types.ObjectId,//value of it is the obj id of the string it is representing typeof objid string
        ref:"user",//to tell mongoose that this id is refering to user collection
        required:[true,"Author id is required"]
    },
    title:{
        type:String,
        required:[true,"Article title is required"]
    },
    category:{
        type:String,
        required:[true,"Article category is required"] 
    },
    content:{
        type:String,
        required:[true,"Article content is required"]
    },
    //{comment:"",user:""}
    comments:[{type:commentSchema,default:[]}],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:false,
    versionKey:false
})
//create model
export const ArticleModel = model("article",articleSchema);
