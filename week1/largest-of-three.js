//find greatest among 3 numbers
// initialization of variables
let a = 30,b=20,c=10;
//checks 'a' is greater than 'b' & 'c' if not goes to else if block
if( a> b && a> c)
{
    console.log(`${a} is greater`);
}
// if block fails then checks b is greater than "a" and "c"
else if(b > c && b > a){
    console.log(`${b} is greater`);
}
// else if block fails then comes to else block and checks if c is greater than "a" & "b"
else{
    console.log(`${c} is greater`);
}