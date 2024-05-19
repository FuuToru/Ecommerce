//Packages
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import OrderRow from './OrderRow';

function Orders(props){
    const { index, item } = props;

    const baseUrl = 'http://127.0.0.1:8000/api';
    const customerId = localStorage.getItem('customer_id');
    const [OrderItems, setOrderItems] = useState([]);
    useEffect ( () =>{
        fetchData(baseUrl+'/customer/'+customerId+'/orderitems/');
    },[]);
    

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setOrderItems(data.results);
        });
    
    }
    console.log(OrderItems);
    
    // Thêm hàm countDownloads

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
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                                </thead>
                                <tbody>
                                    {OrderItems.map((item, index) => (
                                        <OrderRow key={index} index={index} item={item} />
                                    ))}
                                </tbody>

                                

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Orders;
                                        {/* {
                                            item.order.order_status==true && <button onClick={()=>coutDownloads(item.product.id)} className='btn btn-primary btn-sm'>Downloads <span className='badge text-dark bd-white'>{TotalDownload}</span></button>
                                        }
                                        {
                                            item.order.order_status==true && <Link className='btn btn-sm btn-success ms-2' to={`/customer/add-review/${item.product.id}`}>Add Review</Link>
                                        } */}