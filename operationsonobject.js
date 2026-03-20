let person = {
    name :"akshitha",
    age: 25,
}
//add new property
person.city = "hyd"
//update a property 
person.name = "anikha"//it will update here
person.height = 252//it will add this property
//delete a property
delete person.age
console.log(person)