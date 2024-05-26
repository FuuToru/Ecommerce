// - Tạo file mới mới tên VendorCustomerOrders.js:
//Packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { useParams } from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";

function AdminCustomerDetail(props){

    const { customer_id } = useParams();
    const vendor_id = localStorage.getItem('vendor_id');
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetchData(`${baseUrl}/admin-page/customer/${customer_id}/`);
    }
    , []);

    function fetchData(baseUrl) {
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            setOrderItems(data.results);
        })
    }


    console.log(orderItems);

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <AdminSidebar/>

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
                                        <th>USD Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>
                                                    <Link><img src={item.product.image} className='img-thumbnail' width ='80' alt='...'></img>
                                                        <p>{item.product.title}</p></Link>
                                                </td>
                                                <td>
                                                    {item.product.price} VND
                                                </td>
                                                <td>
                                                    {item.product.usd_price} USD
                                                </td>
                                                <td>
                                                    {
                                                        item.order.order_status && <span className='text-success'><i className='fa fa-check-circle'></i>Completed</span>
                                                    }
                                                    {
                                                        !item.order.order_status && <span className='text-warning'><i className='fa fa-spinner'></i>Pending</span>
                                                    }
                                                    
                                                </td>
                                            </tr>
                                        ))
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

export default AdminCustomerDetail;