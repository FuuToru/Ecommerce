//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
<<<<<<< HEAD
// import ProductDetail from './ProductDetail';
import { CartContext } from '../Context';
import React, { useState, useContext } from 'react';
=======
import ProductDetail from './ProductDetail';
import {useState,useContext} from 'react';
import { CartContext, CurrencyContext } from '../Context';
>>>>>>> tri-dev
function Checkout(props){
    const {cartData, setCartData} = useContext(CartContext);
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
    const [productData,setproductData] = useState([]);
<<<<<<< HEAD
    if (cartData == null){
        var carItems = 0;
=======
    const {CurrencyData, setCurrencyData} = useContext(CurrencyContext);
    if(cartData == null || cartData.length == 0){
        var cartItems = 0;
>>>>>>> tri-dev
    }else{
        var carItems = cartData.length;
    }
    var sum=0;
    if(cartItems>0){
        cartData.map((item,index)=>{
            if(CurrencyData == 'vnd' || CurrencyData == undefined){
                sum+= parseFloat(item.product.price);

            }else if (CurrencyData == 'usd'){
                sum+= parseFloat(item.product.usd_price);

            }
            
        });
    }

    var sum = 0;
    cartData.map((item, index)=>{
        sum += parseFloat(item.product.price);
    });

    const cartRemoveButtonHandler = (product_id) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!= null && cart.product.id == product_id){
                // delete cartJson[index];
                cartJson.splice(index,1);
            }
        });
        var cardString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cardString);
        setcartButtonClickStatus(false);
        setCartData(cartJson);
    };

<<<<<<< HEAD
    return(
        <div className='container mt-4'>
            <h1 className='mb-4'>All Items {carItems}</h1>
                <div className='row'>
                    <div className='col-12'>
                    <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Action</th>
=======
    }

    return(
        <div className='container mt-4'>
            <h1 className='mb-4'>All Items ({cartItems})</h1>
            {cartData &&
            <div className='row'>
                <div className='col-12'>
                <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>
                        { cartData &&
                            cartData.map((item,index)=>{
                                return (
                                <tr>
                                <td>{index+1}</td>
                                <td>
                                    <Link>
                                    <img src={item.product.image} className='img-thumbnail' width ='80' alt='...'></img>
                                    <p>{item.product.title}</p></Link>
    
    
                                </td>
                                <td>
                                {
                                    (CurrencyData=='vnd' || CurrencyData == undefined) && <td>{item.product.price} VND</td>
                                }
                                {
                                    CurrencyData =='usd' &&     
                                    <td>${item.product.usd_price}</td>
                                }
                                </td>
                                <td>
                        
                                    <button title="Add to Cart" type="button" onClick={() => cartRemoveButtonHandler(item.product.id)} className='btn btn-warning btn-sm'>
                                    <i className="fa-solid fa-cart-plus"></i> Remove from Cart
                                    </button>


                                
                                </td>
>>>>>>> tri-dev
                            </tr>

                        </thead>
                        <tbody>
                            {cartData &&
                                cartData.map((item, index)=>{
                                    return ( 
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                <Link><img src={item.product.image} className='img-thumbnail' width='80' alt={item.product.title} /></Link>
                                                <p><Link>{item.product.title}</Link></p>
                                            </td>
                                            <td>{item.product.price}</td>
                                            <td>
                                                <button title = "Remove from Cart" type='button' onClick={()=> cartRemoveButtonHandler(item.product.id)} className='btn btn-warning me-1 mb-1'>
                                                <i className="fa-solid fa-cart-plus"></i> Remove from Cart</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>

                                </th>
                                <th>
                                    Total
                                </th>
                                <th>
                                    Rs. {sum}
                                </th>

<<<<<<< HEAD
                            </tr>
                            <tr>
                                    <td colSpan='3' align="center" >
                                        <Link to='/' className='btn btn-secondary'>  Continue Shopping</Link>
                                        <Link to='/confirm-order' className='btn btn-primary ms-1'>Proceed to Payment</Link>
=======
                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                            {
                                    (CurrencyData=='vnd' || CurrencyData == undefined) && <td>{sum} VND</td>
                                }
                                {
                                    CurrencyData =='usd' &&     
                                    <td>${sum}</td>
                                }
                            </th>

                        </tr>
                        <tr>
                                <td colSpan='3' align="center" >
                                    <Link to='/categories' className='btn btn-secondary'>  Continue Shopping</Link>
                                    <Link to='/confirm-order' className='btn btn-primary ms-1'>Proceed to Payment</Link>
>>>>>>> tri-dev


                                    </td>
                            </tr>

                        </tfoot>

                    </table>
                </div>

                    </div>

                </div>
            

        </div>


    );
}

export default Checkout;