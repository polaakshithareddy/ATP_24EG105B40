//find the sum of the array of marks 
// initialization of an array
let a = [90,78,65,98];
let sum = 0;
for(let i = 0;i < a.length;i++){
    sum += a[i];/* i =0; 0 + a[0] => 0 + 90=>sum = 90
                   i = 1; 90 + a[1] => 90 + 78 => sum = 168
                   i = 2; 168 + a[2]=> 168 + 65 => sum = 233
                   i = 3 ; 233 + a[3]=> 233+ 98 => sum = 331
                   i = 4  loop will end bcoz i < length of array(4) */
}
console.log(` sum is ${sum}`)