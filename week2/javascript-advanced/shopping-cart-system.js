/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.*/

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
    //1. Use filter() to get only inStock products
    const instocks = cart.filter(products=>products.inStock == true)
    console.log(instocks);
    //2. Use map() to create a new array with:  { name, totalPrice }
    const arr = cart.map(element=>({
      name : element.name,
      totalprice : (element.price * element.quantity)
    }))
    console.log(arr);
    //3. Use reduce() to calculate grand total cart value
    const total = cart.reduce((sum,product)=>{
       return sum + (product.price * product.quantity)
    },0)
    console.log(total);
    //4. Use find() to get details of "Mouse"
    const search = cart.find(products=>products.name = "mouse")
    console.log(search);
    //5. Use findIndex() to find the position of "Keyboard"
    const index = cart.findIndex(products=>products.name === "Keyboard")
    console.log(index);