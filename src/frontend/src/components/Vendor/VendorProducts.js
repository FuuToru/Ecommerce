//Packages
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import VendorSidebar from '../Vendor/VendorSidebar';
const baseUrl = "http://127.0.0.1:8000/api";

function VendorProducts(props){

    const [productData, setProductData] = useState([]);

    // const vendorData = localStorage.getItem('vendor');
    // const vendor = JSON.parse(vendorData);

    useEffect ( () =>{
        fetchData(baseUrl+'/products/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProductData(data.results);
        });
    }

    // useEffect(() => {
    //     // Lấy thông tin về vendor đang đăng nhập (ví dụ: vendorId)
    //     // const vendorId = getVendorId(); // Hàm getVendorId() phải được thay thế bằng cách lấy thông tin vendor thực tế
    
    //     // Gọi API chỉ lấy các sản phẩm của vendor đó
    //     fetchData(`${baseUrl}/products/?vendor=${vendor.id}`);
    // }, []);
    
    // function fetchData(url) {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProductData(data.results);
    //         });
    // }

    console.log(productData);

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <td colSpan="6">
                                        <Link to="/vendor/add-product" className="btn btn-primary mb-2 " ><i className='fa fa-plus-circle'></i>Add Product</Link>
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
                                    productData.map((product, index)=>
                                        <tr>
                                            <td>{product.id}</td>
                                            <td>
                                                <Link to={`/vendor/update-product/${product.id}`} >{product.title}</Link>
                                            </td>
                                            <td>{product.price} VND</td>
                                            <td>${product.usd_price}</td>
                                            <td>
                                                {
                                                    !product.published_status && 'Pending'
                                                }
                                                {
                                                    product.published_status && <span class='text-success'>Published</span>
                                                }
                                            </td>
                                            <td>
                                                <a href="#" className='btn btn-primary ms-1'>Edit</a>
                                                <a href="#" className='btn btn-danger ms-1'>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default VendorProducts;