import React, { useState, useEffect, useReducer } from "react"
import axios from 'axios';
import './Products.css';
import { Link } from "react-router-dom";

const ACTION_TYPES = {
  HOVER: 'HOVER'
}

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.HOVER:
        return {
          ...state,
          hoverProduct: action.sendObject_payload,

        }
        break;

      default:
        return state;
    }

  }

  const initialState = {
    hoverProduct: null
  }
  const [state, dispatch] = useReducer(reducer, initialState)



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
    <div>
      <button>
        <Link to='/product/new/'>New Product</Link>
      </button>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id}
            /* className={state.hoveredProduct && state.hoveredProduct.id === product.id ? 'hoverProduct' : ""} */
            className={state.hoverProduct && state.hoverProduct.id === product.id ? "product-item-hoverd" : "product-item"}
            onMouseEnter={() => dispatch({ type: ACTION_TYPES.HOVER, sendObject_payload: product })}
          >
            <Link to={`/product/details/${product.id}`}>
              {/* <img src={product.images[0]}></img> */}
              <img src={product.images[0].replace('/"', '').replace('[', '').replace('"', '').replace(']', '')}></img>
            </Link>
            <div>{product.title}</div>
            <div>{product.price}</div>
            {/* add buttons in hover mode */}
            {state.hoverProduct && state.hoverProduct.id === product.id && (
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            )}

          </div>
        ))
        }
      </div >
    </div>);
}

export default Products
