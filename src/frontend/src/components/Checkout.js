import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
import { useState,useEffect, useContext } from 'react';
import { CartContext, CurrencyContext } from '../Context';
import AddressList from './Customer/AddressList';
import AddAddress from './Customer/AddAddress';
import axios from 'axios';
function Checkout(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const customer_id = localStorage.getItem('customer_id');
    const [AddressList, setAddressList] = useState([]);
    const { cartData, setCartData } = useContext(CartContext);
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
    const [productData, setproductData] = useState([]);

    const { CurrencyData, setCurrencyData } = useContext(CurrencyContext);

    useEffect(() => {
        fetchData(baseUrl + '/customer/' + customer_id + '/address-list/');
    }, []);

    function fetchData(baseUrl) {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setAddressList(data.results);
            });
    }

    if (cartData == null || cartData.length == 0) {
        var cartItems = 0;
    } else {
        var cartItems = cartData.length;
    }

    var sum = 0;
    cartData.map((item, index) => {
        if (CurrencyData == 'vnd' || CurrencyData == undefined) {
            sum += parseFloat(item.product.price) * item.product.qty;
        } else if (CurrencyData == 'usd') {
            sum += parseFloat(item.product.usd_price) * item.product.qty;
        }
    });

    const cartRemoveButtonHandler = (product_id) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == product_id) {
                cartJson.splice(index, 1);
            }
        });
        var cardString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cardString);
        setcartButtonClickStatus(false);
        setCartData(cartJson);
    };

    const updateQuantity = (product_id, quantity) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        console.log(cartJson);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == product_id) {
                cart.product.qty += quantity;
                if (cart.product.qty < 1) cart.product.qty = 1; // Minimum quantity is 1
            }
        });
        var cardString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cardString);
        setCartData(cartJson);
    };
    console.log(cartData);

    function DefaultAddressHandler(address_id) {
        const formData = new FormData();
        formData.append('address_id',address_id);

        // Submit Data
        axios.post(baseUrl +'/mark-default-address/'+parseInt(address_id)+'/', formData
        ).then(function (response){
            if(response.data.bool == true){
                window.location.reload();

            }
            console.log(response);
            console.log(AddressList);
        })
        .catch(function (error){
            console.log(error);
        });
    }

    return (
        <div className='container mt-4'>
            <h1 className='mb-4'>All Items ({cartItems})</h1>
            <div className='row'>
            <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/customer/add-address" className='btn btn-outline-success mb-4 float-start'><i className='fa fa-plus-circle'></i>Add Address</Link>
                        </div>
                    </div>
                    <div className='row'>
                        {AddressList.map((address, index) => {
                            return (
                                <div className='col-4 mb-4' key={index}>
                                    <div className='card'>
                                        <div className='card-body text-muted'>
                                            <h6>
                                                {address.default_address ==true&& 
                                                <span><i className='fa fa-check-circle text-success mb-2'></i><br /></span>}
                                                {!address.default_address && <span onClick={()=>DefaultAddressHandler(address.id)}role='button'><i className='fa fa-check-circle text-secondary mb-2'></i><br /></span>}
                                                <Link to={`/customer/update-address/${address.id}`}>{address.address}</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {cartData && (
                <div className='row'>
                    <div className='col-12'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData &&
                                        cartData.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link to={`/product/${item.product.title}/${item.product.id}`}>
                                                            <img src={item.product.image} className='img-thumbnail' width='80' alt='...' />
                                                            <p>{item.product.title}</p>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {(CurrencyData == 'vnd' || CurrencyData == undefined) && <td>{item.product.price} VND</td>}
                                                        {CurrencyData == 'usd' && <td>${item.product.usd_price}</td>}
                                                    </td>
                                                    <td>
                                                        <button onClick={() => updateQuantity(item.product.id, -1)} className='btn btn-sm btn-secondary'>-</button>
                                                        <span className='mx-2'>{item.product.qty}</span>
                                                        <button onClick={() => updateQuantity(item.product.id, 1)} className='btn btn-sm btn-secondary'>+</button>
                                                    </td>
                                                    <td>
                                                        <button title="Remove from Cart" type="button" onClick={() => cartRemoveButtonHandler(item.product.id)} className='btn btn-warning btn-sm'>
                                                            <i className="fa-solid fa-cart-plus"></i> Remove from Cart
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Total</th>
                                        <th>
                                            {(CurrencyData == 'vnd' || CurrencyData == undefined) && <td>{sum},000 VND</td>}
                                            {CurrencyData == 'usd' && <td>${sum}</td>}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td colSpan='4' align='center'>
                                            <Link to='/categories' className='btn btn-secondary'>
                                                Continue Shopping
                                            </Link>
                                            <Link to='/confirm-order' className='btn btn-primary ms-1'>
                                                Proceed to Payment
                                            </Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
