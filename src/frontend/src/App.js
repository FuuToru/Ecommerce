//Assets
import {Routes,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import bg from './bg-1.avif';
import './style.css';

//Website
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';

//Customer Panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/categories' element ={<Categories/>}/>
        <Route path='/category/:category_slug/:category_id' element ={<CategoryProducts/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element ={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/order/success' element={<OrderSuccess/>}></Route>
        <Route path='/order/failure' element={<OrderFailure/>}></Route>
        <Route path='/customer/register' element={<Register/>}></Route>
        <Route path='/customer/login' element={<Login/>}></Route>
        <Route path='/customer/dashboard' element={<Dashboard/>}></Route>
        <Route path='/customer/orders' element={<Orders/>}></Route>
      </Routes>
      <Footer/>
    </>  
    );
}
export default App;