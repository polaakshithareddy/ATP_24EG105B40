
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//Insert new Emp at 2nd position
employees.splice(1,0,{eno :106,name:"akshitha",marks:[70,80,90]})//splice(index,deletionelement,insertvalue)
console.log(employees)
//Remove an emp with name "Kiran"
employees.splice(4,1)//splice(index,no.of delete ele)
console.log(employees)
//Change the last mark 95 to 75 of emp  "Sneha"
employees.splice(3,1,{eno : 103,name:'sneha',marks:[88,92,75]})//splice(index,deletion,insertvalue)
console.log(employees)