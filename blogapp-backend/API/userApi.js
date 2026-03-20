import exp from 'express'
import { verifyToken }from '../middlewears/verifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp = exp.Router()
//READ ARTICLES OF ALL AUTHORS 
/* it is safe from cross side scripting attack to take token but http only cookie client side js cannot access this
but there is another attack csrf attack they send a link and when we click even with req the token is also sent with that and token is used to access that */
userApp.get('/article',verifyToken("USER"),async(req,res)=>{
    //read articles
    const articlesList = await ArticleModel.find({isArticleActive:true})
    //send response
    res.status(200).json({message:"Article list",payload:articlesList})
})
//ADD COMMENT TO AN ARTICLE
userApp.put("/article",verifyToken("USER"),async(req,res)=>{
    //get comment details from client req
    const {articleId,comment} = req.body;//{articleId,comment}
    //check article
    const articleDocument = await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    //if article not found
    if(!articleDocument){
        return res.status(404).json({message:"Article not found"})
    }
    //if article is found get user id
    const userId = req.user?.id;//in common api we are setting req.user={id,email,role} after decoding token so user.id
    //add comment to comment array of article document
    articleDocument.comments.push({user:userId,comment})
    //save article document
    await articleDocument.save();
    //
    res.status(200).json({message:"Comment added successfully"})
})
