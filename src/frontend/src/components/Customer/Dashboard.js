//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import { useState, useEffect, useContext } from 'react';
import { UserContext, CartContext, CurrencyContext } from '../../Context';
import axios from 'axios';
function Dashboard(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const customer_id = localStorage.getItem('customer_id');
    const [CountList, setCountList] = useState({
        'totalAddress':0,
        'totalOrder':0,
        'totalWishlist':0
    });

    useEffect(() => {
        fetchData(baseUrl + '/customer/dashboard/' + customer_id + '/');
    }, []);

    function fetchData(baseUrl) {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setCountList({
                    'totalAddress':data.totalAddress,
                    'totalOrder':data.totalOrder,
                    'totalWishlist':data.totalWishlist,
                })
            });
    }
    console.log(CountList)

    
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><Link to="/customer/orders">{CountList.totalOrder}</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Wishlist</h4>
                                    <h4><Link to="/customer/wishlist">{CountList.totalWishlist}</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Addresses</h4>
                                    <h4><Link to="/customer/address">{CountList.totalAddress}</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Dashboard;