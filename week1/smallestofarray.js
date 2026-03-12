//find the smallest among the array
let a=[90,78,65,98]
// taking the smallest ele as first ele in array and comparing with remaining
let smallest = a[0];
for(let i = 1; i<a.length;i++){
    if(smallest>a[i]){
        smallest = a[i];
    }
}
console.log(`smallest value in the array is ${smallest}`);
