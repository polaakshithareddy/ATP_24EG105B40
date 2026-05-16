//write  a function that receives any no of args and return their sum

const findSum=(...numbers)=> {
    return numbers.reduce((sum,num)=>sum+num,0)
}
let result=findSum(10,20,30,40,50,60)
console.log(result)