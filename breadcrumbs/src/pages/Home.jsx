import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products));
    },[])
    
  return (
   <>
        <h1>Home</h1>
    <div className="products">
        {products && products.map(product => {
            return <Link to={`/products/${product.id}`} key={product.id} > <div className=" product">
                <img src={product.thumbnail} alt="" />
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
            </div>
            </Link>
        }).slice(0,12)}


        <Link to="/products"><button>View all Products</button></Link>
    </div>
    </>
  )
}

export default Home
