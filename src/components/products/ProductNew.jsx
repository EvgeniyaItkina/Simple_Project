import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductNew = () => {
  const [product, setProduct] = useState();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.title.length < 5) {
      alert("error")
      return
    }
    callAPI()
  }


  const handleChange = (e) => {
    const pProduct = {
      title: e.target.value,
      price: 10,
      description: "  ",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"]
    }
    setProduct(pProduct)
  }

  const callAPI = async () => {
    const request = product
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/products/", request)
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
    //useNavigate()

    navigate('/')
  }

  return (
    <div>
      <h3>Product New</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type='text'
          name='title'
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProductNew
