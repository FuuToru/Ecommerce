//Packages
import { Link } from 'react-router-dom';
import AdminSidebar from '../Admin/AdminSidebar';
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';
function AdminVendorDetail(props){

    const [productData, setProductData] = useState([]);
    const [OrderTotal, setOrderTotal] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [VendorData, setVendorData] = useState({
        'totalProducts': 0,
        'totalOrders': 0
    
    });
    const vendor_id = useParams().vendor_id;

    function fetchOrderData(product_id) {
        fetch(baseURL + '/product-order/' + product_id + '/')
        .then(response => response.json())
        .then(data => {
            setOrderTotal(data);
            console.log(data);
        });
    }

    
    function fetchData(baseURL){
        fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            setVendorData(data);
        });
    }
    fetchData(baseURL+'/vendor/'+vendor_id+'/dashboard/');
    
    useEffect ( () =>{
        fetchData(baseURL+'/vendor/'+vendor_id+"/dashboard/");
    },[]);

    useEffect(() => {
        fetchDataProduct(currentPage);
    }, [currentPage]);

    function fetchDataProduct(page) {
        fetch(`${baseURL}/products/?page=${page}&limit=${12}&vendor_id=${vendor_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProductData(data.results);
                setTotalPages(Math.ceil(data.count / 12));
                console.log(data.results);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button 
                    key={i} 
                    className={`btn ${i === currentPage ? 'btn-primary' : 'btn-secondary'}`} 
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <AdminSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Products</h4>
                                    <h4><span style={{ color: 'red' }}>{VendorData.totalProducts}</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><span style={{ color: 'red' }}>{VendorData.totalOrders}</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>USD Price</th>
                                    <th>Status</th>
                                    {/* <th>Total Order</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData.map((product, index) => (
                                        // fetchOrderData(product.id),
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>
                                                <Link to={`/product/:product_slug/:product_id`}>{product.title}</Link>
                                            </td>
                                            <td>{product.price} VND</td>
                                            <td>${product.usd_price}</td>
                                            <td>
                                                {!product.published_status && 'Pending'}
                                                {product.published_status && <span className='text-success'>Published</span>}
                                            </td>
                                            {/* <td>
                                                { OrderTotal.totalOrder}
                                            </td> */}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='pagination'>
                            {renderPagination()}
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>


    );
}

export default AdminVendorDetail;