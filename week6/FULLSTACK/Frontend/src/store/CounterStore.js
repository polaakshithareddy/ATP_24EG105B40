import {create} from "zustand";
//create store
export const useCounterStore=create(set=>({
    //state 
    newCounter:0,
    newCounter1:100,
    //add user state(name,age,email)
    user:{name:"Akshitha",email:"akshitha@gmail.com",age:20},
    //function to chnag email
    changeEmail:()=>({...user,email:"test@gmail.com"}),
    //function to chnage name and age
    chnageNameAndAge:()=>({...user,name:"akshithareddy",age:18}),
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0})
}))