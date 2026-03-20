//i will send 10000 rupees on tomorrow
let sendMoney = true;
//promise producer
const promiseobj = new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(sendMoney===true){
            fulfilled("hey i sent the money");
        }else{
            rejected("sorry i couldnot send");
        }
    },5000);
});
// promise consumer
promiseobj
.then((message)=>console.log("i hope u received",message))
.catch((error)=>console.log("there was an error",error))