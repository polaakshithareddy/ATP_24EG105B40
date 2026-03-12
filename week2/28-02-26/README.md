STEPS TO CREATE BACKEND
1.GENERATE PACKAGE.JSON FILE
   npm init -y
   (here we will get a file = package.json)
2.INSTALL AND IMPORT HTTP SERVER
  -install http server
    npm install express
    (here after entering we get a folder called node_modules and file package.lock.json)
  - import http server
    for this create a file server.js
         in that file write this four lines for the server
           //create http server
            import exp from "express";//here express is alrdy existing as we alrdy installed all the modules before and is stored in node_modules.
            const app=exp();
            //set a port number
            const port=3000;
            //assign port number to http server-we use listen
            app.listen(port,()=>console.log(`server listening port ${port}...`));