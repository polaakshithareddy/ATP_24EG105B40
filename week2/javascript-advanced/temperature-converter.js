/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.*/

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
  //  1. filter() temperatures above 35
  const f = temperatures.filter(tempobj=> tempobj > 35)
  console.log(f);
 //2. map() to convert all temperatures from Celsius → Fahrenheit
  const m = temperatures.map(tempobj => (tempobj)*(9/5)+32)
  console.log(m);
 //3. reduce() to calculate average temperature
  const r = temperatures.reduce((Acc,element)=>Acc+element)
  const avg = r/(temperatures.length)
  console.log(avg);
 //4. find() first temperature above 40
  const f1 = temperatures.find(tempobj => tempobj >40)
  console.log(f1);
//5. findIndex() of temperature 28
 const f2 = temperatures.findIndex(tempobj => tempobj===28)
 console.log(f2);
