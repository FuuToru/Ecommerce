//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import {useState,useEffect, useContext} from 'react';
import { UserContext, CartContext, CurrencyContext } from '../../Context';
import axios from 'axios';
function Wishlist(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const customerId = localStorage.getItem('customer_id');
    const [WishItems, setWishItems] = useState([]);
    const {CurrencyData, setCurrencyData} = useContext(CurrencyContext);

    useEffect ( () =>{
        fetchData(baseUrl+'/customer/'+customerId+'/wishitems/');
    },[]);
    

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setWishItems(data.results);
        });
    
    }
    function removeFromWishList(wishlist_id){
        const formData = new FormData();
        formData.append('wishlist_id', wishlist_id);
        axios.post(baseUrl+'/remove-from-wishlist/',formData).then(function(response){
            if(response.data.bool == true){
                document.getElementById('row'+wishlist_id).remove();
            }
        }).catch(function(error){
            console.log(error);
        });
    }
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
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
                            {
                                WishItems.map((item,index)=>{
                                    return <tr id={`row${item.id}`}>
                                        <td>
                                            {index +1}
                                        </td>
                                        <td>
                                            <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                                            <img src={item.product.image} className='img-thumbnail' width='80' alt="..."></img>
                                            <p>{item.product.title}</p>
                                            </Link>
                                            </td>
                                                {
                        CurrencyData!='usd' &&                    <td>{item.product.price} VND</td>
                    }
                    {
                        CurrencyData =='usd' &&                    
                        <td>${item.product.usd_price}</td> 
                    }
            
                    <td>
                        <button className='btn btn-danger btn-sm' onClick={()=>removeFromWishList(item.id)}>Remove</button>
                    </td>
                                            </tr>
                                        })
                                    }

                    </tbody>
                                

                            </table>
                        </div>
                        </div>
                </div>

            </div>
        </div>


    );
}

export default Wishlist;