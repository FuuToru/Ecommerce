import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import VendorSidebar from '../Vendor/VendorSidebar';

const baseUrl = "http://127.0.0.1:8000/api";

function VendorProducts(props) {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    function fetchData(page) {
        fetch(`${baseUrl}/products/?page=${page}&limit=${12}&vendor_id=${vendor_id}`)
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

    function showConfirm(product_id) {
        var _confirm = window.confirm('Are you sure you want to delete this product?');
        if (_confirm) {
            fetch(baseUrl + '/product/' + product_id + '/', {
                method: 'DELETE',
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setProductData((prevProductData) => prevProductData.filter(product => product.id !== product_id));
                console.log('Product deleted');
            })
            .catch((error) => {
                console.error('There was a problem with the delete operation:', error);
            });
        }
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

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <td colSpan="6">
                                        <Link to="/vendor/add-product" className="btn btn-primary mb-2">
                                            <i className='fa fa-plus-circle'></i> Add Product
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>USD Price</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>
                                                <Link to={`/vendor/update-product/${product.id}`}>{product.title}</Link>
                                            </td>
                                            <td>{product.price} VND</td>
                                            <td>${product.usd_price}</td>
                                            <td>
                                                {!product.published_status && 'Pending'}
                                                {product.published_status && <span className='text-success'>Published</span>}
                                            </td>
                                            <td>
                                                <Link to={`/vendor/update-product/${product.id}`} className='btn btn-primary ms-1'>Edit</Link>
                                                <button onClick={() => showConfirm(product.id)} className='btn btn-danger ms-1'>Delete</button>
                                            </td>
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
    );
}

export default VendorProducts;