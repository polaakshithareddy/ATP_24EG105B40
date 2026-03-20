//find the smallest among the array
let a=[90,78,65,98]
// taking the smallest ele as first ele in array and comparing with remaining
let smallest = a[0];
for(let i = 1; i<a.length;i++){
    if(smallest>a[i]){       /*  i = 1=> 90>78=>smallest = 78
                                 i = 2=> 78 > 65 => smallest = 65
                                i = 3 = > 65 < 98 => smallest = 65 and comes out of for loop and prints smallest*/
        smallest = a[i];
    }
}
console.log(`smallest value in the array is ${smallest}`);
