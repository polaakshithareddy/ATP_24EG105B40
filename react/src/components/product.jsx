function Product(props){
    const {productobj} = props;
    //state
    //return a react element
    return(
        <div>
            <h2 className="text-2xl">{productobj.title}</h2>
            <p className="text-amber-300">{productobj.price}</p>
            <p className="text-1xl">{productobj.description}</p>
        </div>
        
    )
}
export default Product;