import './App.css';
import ProductDetails from './components/products/ProductDetails';
import ProductEdit from './components/products/ProductEdit';
import ProductNew from './components/products/ProductNew';
import Products from './components/products/Products';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <BrowserRouter>
        {/* <nav className="horizontal-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product/:product_id">Home</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path='/product/new' element={<ProductNew />} />
          <Route path='/product/details/:product_id' element={<ProductDetails />} />
          <Route path='/product/edit/:product_id' element={<ProductEdit />} />
          <Route path='/' element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
