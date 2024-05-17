import './App.css';
import ProductDetails from './components/products/ProductDetails';
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
          <Route path='/product/:product_id' element={<ProductDetails />} />
          <Route path='/' element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
