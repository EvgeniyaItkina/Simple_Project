import React, { useState, useEffect } from "react"
import axios from 'axios';
import './Products.css';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
        setError(error)
      } finally {
        setLoading(false)
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div>Error {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!products) return <div>No products found</div>

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}
          className="product-item"
          onMouseEnter={() => { }}
        >
          <Link to={`/product/${product.id}`}>
            {/* <img src={product.images[0]}></img> */}
            <img src={product.images[0].replace('/"', '').replace('[', '').replace('"', '').replace(']', '')}></img>
          </Link>
          <div>{product.title}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Products
