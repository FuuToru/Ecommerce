//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import VendorSidebar from '../Vendor/VendorSidebar';
import { useState } from 'react';
const baseURL = 'http://127.0.0.1:8000/api/';
function VendorDashboard(props){
    const [VendorData, setVendorData] = useState({
        'totalProducts': 0,
        'totalOrders': 0,
        'totalCustomers': 0
    
    });
    const vendor_id = localStorage.getItem('vendor_id');
    
    function fetchData(baseURL){
        fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            setVendorData(data);
        });
    }
    fetchData(baseURL+'vendor/'+vendor_id+'/dashboard/');
    console.log(VendorData);
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Products</h4>
                                    <h4><Link to="/vendor/products">{VendorData.totalProducts}</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><Link to="/vendor/orders">{VendorData.totalOrders}</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Customers</h4>
                                    <h4><Link to="/vendor/customers">{VendorData.totalCustomers}</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default VendorDashboard;