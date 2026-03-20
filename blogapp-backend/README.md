1.Generate package.json - npm init -y
2.Create .env file - npm install dotenv
3.create express app & assign port number- npm install express
4.connect to db
5.Define schemas and create models
 -UserTypeSchema
   firstname
   lastname
   email
   password
   role
   profileImageUrl
   isUserActive - this field is used to do soft deleting(restoring possible)

-ArticleSchema(dependent)
   author
   title
   category
   content
   comments
   isArticleActive

6.implement apis
 - USERAPI
 -AUTHORAPI
 -ARTICLEAPI
7.
