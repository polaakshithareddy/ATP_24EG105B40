/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.*/

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
    //1. filter() marks ≥ 40 (pass marks)
    const pass = marks.filter(marks => marks >= 40)
    console.log(pass);
    //2. map() to add 5 grace marks to each student
    const grace = marks.map(marks => marks+5)
    console.log(grace);
    //3. reduce() to find highest mark
    const highest = marks.reduce((acc,ele)=>acc>ele?acc:ele)
    console.log(highest);
    //4. find() first mark below 40
    const below40 = marks.find(marks => marks<40)
    console.log(below40);
    //5. findIndex() of mark 92
    const index = marks.findIndex(marks => marks === 92)
    console.log(index);