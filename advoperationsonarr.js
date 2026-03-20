let testData = [40,57,98,68,20]
//filter(selection)
const r = testData.filter(element=>element > 40 && element < 80)
console.log(r);
//map(modify)
//add 10 for each element
const r1 = testData.map(element => element + 10)
console.log(r1);
//add 10 for the elements<50 and subtract 20 from elements >50
const r2 = testData.map(function(element){
    if(element < 50){
        return element+10
    }else{
        return element-20
    }
})
console.log(r2);
//reduce
  //find sum of elements
  const sum = testData.reduce((accumulator,element)=>accumulator+element)
  //                             40         57         97
  //                              97        98         195
  console.log(sum)
  //find small
  //let min = testData.reduce((acc,element)=>acc<element?acc:element)(sir approach)
  const small = testData.reduce((accumulator,element)=>{
if(accumulator <element){
    return accumulator
}
else{
    return element
}
  }
)
console.log(small);
  //find big
  //let max = testData.reduce((acc,element)=>acc>element?acc:element)(sir approach)
  const big = testData.reduce((accumulator,element)=>{
    if(accumulator > element)
    {
        return accumulator
    }
    else{
        return element
    }
  })
  console.log(big); 
  //find
    //search 98
    let el1= testData.find(element=>element===98)
    console.log(el1);
    // search 25
    let el2= testData.find(element=>element===25)
    console.log(el2);
//findIndex
  //search 98
   let el3= testData.findIndex(element=>element===98)
   console.log(el3);
 // search 25
  let el4= testData.findIndex(element=>element===25)
  console.log(el4);
//SORT
