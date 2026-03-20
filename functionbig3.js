//write a func that takes 3 args and find the greatest
// function is stored in a variable
let greatest = function(a,b,c)
{
    if(a>b && a>c){ // checks whether a is greater than " b & c"
    return a;
}
else if(b>c && b>a){  // if block fails then checks  b  is greater than " a & c"
    return b;
}
else{                 //  if else if  fails then returns c 
    return c;
}
}
let result = greatest(10,20,30) // function calls and the value is stored in result variable 
console.log(result)