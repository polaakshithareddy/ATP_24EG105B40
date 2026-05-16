
//createmini-express app(seperate route)
import exp from 'express'
export const productApp = exp.Router();

  let products=[
    {productId:101,name:"Watch",brand:"Titan",price:2500},
    {productId:102,name:"Watch",brand:"fasttrack",price:3000},
    {productId:103,name:"phone",brand:"samsung",price:45000},
    {productId:104,name:"laptop",brand:"HP",price:70000}]
 //http://localhost:3000/products
 

//Route to read all products
productApp.get('/products',(req,res)=>{
    res.json({message:"All Products",payload:products})
})

//route to read all products by brand
productApp.get('/products/brand/:brand',(req,res)=>
{
    let brand=req.params.brand
    let filterproducts =products.filter(obj=>obj.brand===brand)
    if(filterproducts.length===0)
        return res.json({message:"No products with that brand"})
    res.json(filterproducts)
})

//route to create a new product
productApp.post('/products',(req,res)=>{
    //get product from client
    const newProduct=req.body;
    //push the product into products[]
    products.push(newProduct)
    //send the response
    res.json({message:"Product created"})
})

//route to update a product
productApp.put('/products',(req,res)=>{
    let updatedproduct =req.body
    let index=products.findIndex(obj=>obj.productId===updatedproduct.productId)
    if(index===-1)
    {
        return res.json({message:"Product not found"})
    }
    products.splice(index,1,updatedproduct)
    return res.json({message:"Product Updated"})
})

//route to delete a product by id
productApp.delete('/products/:id',(req,res)=>{
    let id =Number(req.params.id)//{id:'1'}
    //find index of user
    let index=products.findIndex(Obj=>Obj.productId===id)
    //if user not found
    if(index===-1)
    {
        return res.json({message:"Product not found"})
    }
    products.splice(index,1)
    res.json({message:"Product Deleted"})
});