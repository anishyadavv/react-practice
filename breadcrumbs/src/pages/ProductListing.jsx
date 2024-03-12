import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductListing = () => {

    const [products, setProducts] =useState([]);
    useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products));
    },[])
  return (
    <div>
      <div className="products">
        {products && products.map(product => {
            return <Link key={product.id} to={`${product.id}`}><div className="product" >
                <img src={product.thumbnail} alt="product" />
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
            </div>
            </Link>
        })}
    </div>
    </div>
  )
}

export default ProductListing
