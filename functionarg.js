/* Write a function that receives an array as arg and return their sum*/
function sumArray(a){
    let sum = 0;
    for(let i =0; i< a.length;i++){ /* i=0=> 0 + a[0]= 0+90 => sum = 90
                                        i = 1=>90+ a[1]=>90 + 78 =>168
                                        i = 2 => 168 + a[2] => 168+65 =>233
                                        i = 3 => 233 + a[3] => 233+98=>331
                                        i = 4 loop ends bcoz i <a.length(4)*/                                    
                                          
        sum += a[i];
    }
    return sum;  // here after every iteration sum will be returned
}
console.log(sumArray([90,78,65,98]));