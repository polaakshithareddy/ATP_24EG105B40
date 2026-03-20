//write a function that receives any no of args and return their sum
function total(...a){
    let sum = 0;
    for (let i of a){
    sum += i;
    }
    return sum;
    
}
let r = total(10,20,30,40);//console.log(total(10,20,30,40,50));
console.log(r);
/*const findSum(...numbers)=>{
    return numbers.reduce((sum,el)=>sum+el)//intialvalue -0 is only required while only using the object
}
    let result = findSum(10,20,30)
    console.log(result)*/ 