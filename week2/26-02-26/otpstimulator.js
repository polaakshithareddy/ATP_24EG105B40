/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        /*console.log("OTP Sent Successfully");

        setInterval(()=>{
            console.log("resend otp");
        },10000)*/
    console.log("OTP Sent Successfully");
    let seconds = 5;
    let intervalId = setInterval(()=>{//intervalid is used to clear the infinite loop that is executing the resend otp
        seconds--;
        console.log(`otp can resend after ${seconds} secs`);
        if(seconds===0){
            console.log("resend otp");
            clearInterval(intervalId)//here we are givng the intervalid to stop that  
        }
    },1000);