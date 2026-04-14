import exp from 'express'
import { UserModel } from '../models/UserModel.js'  
import { ArticleModel } from '../models/ArticleModel.js'   
import { verifyToken } from '../middlewears/verifyToken.js'
export const authorApp = exp.Router()

//CREATE NEW ARTICLE
authorApp.post("/article",verifyToken("AUTHOR"),async (req,res)=>{
    //get articleObj from client req
    const articleObj = req.body;
    //check author
    let author = await UserModel.findById(articleObj.author)
    if(!author){
         return res.status(404).json({message:"Invalid author"})
    }
   //if author 1 is taking other author id and publishing it will not allow
   //crosscheck emails
let user = req.user;//{email,role} - decoded token
if(author.email !== user.email){
    return res.status(403).json({message:"you are not authorized to publish article"})
}
 

    //create article document
    const articleDoc = new ArticleModel(articleObj);
    //save
    await articleDoc.save();
    //send response
    res.status(201).json({message:"Article published successfully"})
})
//READ OWN ARTICLES
authorApp.get('/article',verifyToken("AUTHOR"),async (req,res)=>{
    //read article by author email
    const authorIdOfToken = req.user?.id;
    //get articles by author id
    const articleList = await ArticleModel.find({author:authorIdOfToken})
    //send response
    res.status(200).json({message:"Article list",payload:articleList})
})
//EDIT ARTICLES
authorApp.put("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get authorid from decoded token
    const authorIdOfToken = req.user?.id;
    //get modified article details from client
    const {articleId,title,category,content} = req.body;//{articleId,title,category,content}
    const modifiedArticle = await ArticleModel.findOneAndUpdate(
        {_id:articleId,author:authorIdOfToken},
        {$set:{title,category,content}},
        {new:true},
    
    );
    //if either article id or author not correct
    if(!modifiedArticle){
        return res.status(403).json({message:"not authorized to edit article"})
    }
    //send response
    res.status(200).json({message:"Article updated successfully",payload:modifiedArticle})

})
//DELETE ARTICLE BY ARTICLE ID(SOFT DELETE)
authorApp.patch("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get authorid from decoded token
    const authorIdOfToken = req.user?.id;
    //get modified article details from client
    const {articleId,isArticleActive} = req.body;
    //get article by id
    const articleofDB = await ArticleModel.findOne({_id:articleId,author:authorIdOfToken})
    //check status
    if(isArticleActive === articleofDB.isArticleActive){
        return res.status(400).json({message:"Article is already in the same state"})
    }
    articleofDB.isArticleActive = isArticleActive;
    await articleofDB.save();   
    //send response
    res.status(200).json({message:"Article status updated successfully",payload:articleofDB})

})