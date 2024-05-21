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
import ConfirmOrder from './components/ConfirmOrder';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';
import TagProducts from './components/TagProducts';
import Search from './components/Search';

//Customer Panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Logout from './components/Customer/Logout';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';
import UpdateAddress from './components/Customer/UpdateAddress';
import AddReview from './components/Customer/AddReview';


//Vendor
import AllVendors from './components/AllVendors';
import VendorDetail from './components/Vendor/VendorDetail';
import VendorDashboard from './components/Vendor/VendorDashboard';
import VendorLogin from './components/Vendor/VendorLogin';
import VendorRegister from './components/Vendor/VendorRegister';
import VendorProducts from './components/Vendor/VendorProducts';
import VendorAddProduct from './components/Vendor/VendorAddProduct';
import VendorUpdateProduct from './components/Vendor/VendorUpdateProduct';
import VendorOrders from './components/Vendor/VendorOrders';
import VendorCustomers from './components/Vendor/VendorCustomers';
import VendorCustomerOrders from './components/Vendor/VendorCustomerOrders';
import VendorReports from './components/Vendor/VendorReports';
import VendorDailyReports from './components/Vendor/VendorDailyReports';
import VendorMonthlyReports from './components/Vendor/VendorMonthlyReports';
import VendorYearlyReports from './components/Vendor/VendorYearlyReports';
import VendorProfile from './components/Vendor/VendorProfile';
import VendorChangePassword from './components/Vendor/VendorChangePassword';
import VendorLogout from './components/Vendor/VendorLogout';
<<<<<<< HEAD
=======


>>>>>>> origin/main
import { CartContext, CurrencyContext } from './Context';
import {useState} from 'react';
const checkCart=localStorage.getItem('cartData');
const currentCurrency = localStorage.getItem('currency');

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  const [CurrencyData, setCurrencyData] = useState(currentCurrency);
  return (
    <CurrencyContext.Provider value = {{CurrencyData, setCurrencyData}}>
    <CartContext.Provider value={{cartData,setCartData}}>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/categories' element ={<Categories/>}/>
        <Route path='/category/:category_slug/:category_id' element ={<CategoryProducts/>}/>
        <Route path='/products/:tag' element ={<TagProducts/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element ={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/confirm-order' element={<ConfirmOrder/>}></Route>
        <Route path='/order/success' element={<OrderSuccess/>}></Route>
        <Route path='/order/failure' element={<OrderFailure/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        {/* Customer Route */}
        <Route path='/customer/register' element={<Register/>}></Route>
        <Route path='/customer/login' element={<Login/>}></Route>
        <Route path='/customer/logout' element={<Logout/>}></Route>

        <Route path='/customer/dashboard' element={<Dashboard/>}></Route>
        <Route path='/customer/orders' element={<Orders/>}></Route>
        <Route path='/customer/wishlist' element={<Wishlist/>}></Route>
        <Route path='/customer/profile' element={<Profile/>}></Route>
        <Route path='/customer/changepassword' element={<ChangePassword/>}></Route>
        <Route path='/customer/address' element={<AddressList/>}></Route>
        <Route path='/customer/add-address' element={<AddAddress/>}></Route>
        <Route path='/customer/update-address/:address_id' element={<UpdateAddress/>}></Route>
        <Route path='/customer/add-review/:product_id' element={<AddReview/>}></Route>
        {/* Vendor Route  */}
        <Route path='/vendors' element={<AllVendors/>}/>
        <Route path='/vendor/:vendor_username/:vendor_id' element ={<VendorDetail/>}/>
        <Route path='/vendor/register' element={<VendorRegister/>}></Route>
        <Route path='/vendor/login' element={<VendorLogin/>}></Route>
        <Route path='/vendor/dashboard' element={<VendorDashboard/>}></Route>
        <Route path='/vendor/products' element={<VendorProducts/>}></Route>
        <Route path='/vendor/add-product' element={<VendorAddProduct/>}></Route>
        <Route path='/vendor/update-product/:product_id' element={<VendorUpdateProduct/>}></Route>
        <Route path='/vendor/orders' element={<VendorOrders/>}></Route>
        <Route path='/vendor/customers' element={<VendorCustomers/>}></Route>
        <Route path='/vendor/customer/:customer_id/orderitems/' element={<VendorCustomerOrders/>}></Route>
        <Route path='/vendor/reports' element={<VendorReports/>}></Route>
        <Route path='/vendor/daily-report' element={<VendorDailyReports/>}></Route>
        <Route path='/vendor/monthly-report' element={<VendorMonthlyReports/>}></Route>
        <Route path='/vendor/yearly-report' element={<VendorYearlyReports/>}></Route>
        <Route path='/vendor/profile' element={<VendorProfile/>}></Route>
        <Route path='/vendor/changepassword' element={<VendorChangePassword/>}></Route>
        <Route path='/vendor/logout' element={<VendorLogout/>}></Route>
        <Route path='/vendor/customer/:customer_id/orderitems/' element={<VendorCustomerOrders/>}></Route>
        {/* Rating and review */}
        {/* end Ratings and Reviews */}
      </Routes>
      <Footer/>
    </CartContext.Provider>  
    </CurrencyContext.Provider>
    );
}
export default App;