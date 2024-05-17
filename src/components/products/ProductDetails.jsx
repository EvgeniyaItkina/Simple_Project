import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { product_id } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const getOneProductFromAPI = async () => {
    try {
      setLoading(true);
      const responceOneProduct = await axios.get(`https://api.escuelajs.co/api/v1/products/${product_id}`);
      console.log(responceOneProduct);
      setProduct(responceOneProduct.data)
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getOneProductFromAPI()
  }, [])

  if (error) return <div>Error {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!product) return <div>No products found</div>

  return (
    <div>
      Product Details - {product_id}
      {product.id}
      <h1> {product.title} </h1>
      <img src={product.images[0].replace('/"', '').replace('[', '').replace('"', '').replace(']', '')} style={{ width: 100 + 'px' }}></img>
      {/* <img src='product.images[0]' alt='images'></img> */}
    </div>
  )
}

export default ProductDetails
