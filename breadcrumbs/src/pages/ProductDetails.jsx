import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProductDetails(res));
    },[]);
  return (
    <div>
      Product Details
      
      <div>
        <img src={productDetails.thumbnail} alt="" />

        <div>{productDetails.description}</div>
        <div>${productDetails.price}</div>
      </div>
    </div>
  )
}

export default ProductDetails
