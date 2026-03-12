/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.*/

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
  //  1. filter() courses with name length > 5
  const n = courses.filter(name=>name.length>5)
  console.log(n);
    //2. map() to convert course names to uppercase
    const upper = courses.map(names=>names.toUpperCase())
    console.log(upper);
    /*3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"*/ 
    const string = courses.reduce((acc,element)=>acc+ '|' +element)
    console.log(string);

  //  4. find() the course "react"
   const search = courses.find(element =>element === "react")
   console.log(search);
   // 5. findIndex() of "node"
   const index = courses.findIndex(element => element === "react")
   console.log(index);