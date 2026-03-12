//write a func that takes 3 args and find the greatest
let greatest = function(a,b,c)
{
    if(a>b && a>c){
    return a;
}
else if(b>c && b>a){
    return b;
}
else{
    return c;
}
}
let result = greatest(10,20,30)
console.log(result)