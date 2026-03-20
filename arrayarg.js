//write a func that receives an array as arg and return their sum
let test = function(a){

    let sum = 0;
for(let i = 0;i<a.length;i++){
    sum += a[i]
}
    return sum;
}
let result = test([1,2,3])
console.log(result)