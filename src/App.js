import './App.css';
import ProductData from './ProductData'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductListing/>}/>
        <Route path='product-details' element={<ProductDetails/>}/>
        
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
