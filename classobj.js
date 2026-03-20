class Employee{
    //private members
    #eno;
    #name;
    //constructor-to initialise this memebers
    constructor(eno,name){
        this.#eno = eno;
        this.#name = name;
    }
    //instance method
    getData(){
        console.log(`eno is ${this.#eno} and name is ${this.#name}`)
    }
}
//creating the objects
const emp = new Employee(10,"akshitha")
emp.getData()
console.log(emp.name);