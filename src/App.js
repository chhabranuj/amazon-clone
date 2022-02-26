import './App.css';
import Search from './Components/Search/Search';
import Products from './Components/Products/Products';
import TitleBar from './Components/TitleBar/TitleBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsDetails from './Components/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='main'>
      <TitleBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Search />
          }></Route>
          <Route path='productsDetails' element={
            <ProductsDetails />
          }></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;


