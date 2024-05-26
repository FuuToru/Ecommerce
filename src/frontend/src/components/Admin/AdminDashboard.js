import { Link } from 'react-router-dom';
import AdminSidebar from '../Admin/AdminSidebar'; // Make sure you have an AdminSidebar component
import { useState, useEffect } from 'react';

const baseURL = 'http://127.0.0.1:8000/api';

function AdminDashboard(props) {
    const [adminData, setAdminData] = useState({
        'totalProduct': 0,
        'totalOrder': 0,
        'totalCustomer': 0,
        'totalVendor': 0,
    });

    function fetchData(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setAdminData(data);
        });
    }

    useEffect(() => {
        fetchData(baseURL + '/admin/dashboard/');
    }, []);

    console.log(adminData);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <AdminSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Products</h4>
                                    <h4><span style={{ color: 'red' }}>{adminData.totalProduct}</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><span style={{ color: 'red' }}>{adminData.totalOrder}</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4><Link to="/admin-page/customers" style={{ color: 'black', textDecoration: 'none' }}>Total Customers</Link></h4>
                                    <h4><span style={{ color: 'red' }}>{adminData.totalCustomer}</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4><Link to="/admin-page/customers" style={{ color: 'black', textDecoration: 'none' }}>Total Vendors</Link></h4>
                                    <h4><span style={{ color: 'red' }}>{adminData.totalVendor}</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
