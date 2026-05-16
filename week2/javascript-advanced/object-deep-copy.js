/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------*/ 
const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
        }
    },
    items: [
     { product: "Laptop", price: 70000 }
    ]
}
//Create a deep copy of order
let deepcopy=structuredClone(order)
// Modify in copied object customer.address.city
deepcopy.customer.address.city ="Mumbai"
 // Modify in copied object items[0].price
deepcopy.items[0].price = 95000
//Verify original object remains unchanged
console.log(order)
console.log(deepcopy)