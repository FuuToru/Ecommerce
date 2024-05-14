import { useState, useEffect } from 'react';
import VendorSidebar from './VendorSidebar';
import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api";
function VendorAddProduct(props){
    const vendor_id = localStorage.getItem('vendor_id');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [imgUploaderrorMsg, setImgUploadeErrorMsg] = useState('');
    const [imgUploadesuccessMsg, setImgUploadeSuccessMsg] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [productImg, setProductImg] = useState([]);
    const [productData, setProductData] = useState({
        'category':'',
        'vendor':'',
        'title':'',
        'detail': '',
        'price':'',
        'usd_price':'',
        'tag_list':'',
        'slug':'',
        'image':'',
        'demo_url':'',
        'product_file':''
        
    });

    const inputHandler = (event) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.value
        })
    };

    const fileHandler = (event) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.files[0]
        })
    };

    const multipleFileHandler = (event) => {
        var files = event.target.files;
        if (files.length > 0) {
            setProductImg(files);
        }
    };


    const submitHandler = () => {
        const formData = new FormData();
        formData.append('category', productData.category);
        formData.append('vendor', productData.vendor);
        formData.append('title', productData.title);
        formData.append('detail', productData.detail);
        formData.append('price', productData.price);
        formData.append('usd_price', productData.usd_price);
        formData.append('tag_list', productData.tag_list);
        formData.append('slug', productData.slug);
        formData.append('image', productData.image);
        formData.append('demo_url', productData.demo_url);
        formData.append('product_file', productData.product_file);

        

        axios.post(baseUrl + '/products/', formData, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        .then(function(response){
            console.log(response);
            if (response.status == 201) {
                setProductData({
                    'category':'',
                    'vendor':'',
                    'title':'',
                    'detail': '',
                    'price':'',
                    'usd_price':'',
                    'tag_list':'',
                    'slug':'',
                    'image':'',
                    'demo_url':'',
                    'product_file':'',
                    'product_img':''
                });
                setErrorMsg("");
                setSuccessMsg(response.statusText);

                // Upload Product Images
                for (let i = 0; i < productImg.length; i++) {
                    const ImgFormData = new FormData();
                    ImgFormData.append('product', response.data.id);
                    ImgFormData.append('image', productImg[i]);
                    axios.post(baseUrl + '/product-imgs/', ImgFormData)
                    .then(function(response){
                        console.log(response);
                    })
                    .catch(function(error){
                        console.log(error);    
                    });
                }

                setProductImg('');

                //End Upload Product Images

            } else {
                setSuccessMsg('');  
                setErrorMsg(response.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    useEffect ( () =>{
        setProductData({
            ...productData,
            'vendor':vendor_id
        });
        fetchData(baseUrl+'/categories/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setCategoryData(data.results);
        });
    }

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                        <div className='card-body'>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                    <form>
                    <div className="mb-3">
                        <label for="Category" className="form-label">Category</label>
                        <select className='form-control' name='category' onChange={inputHandler}>
                            {
                                categoryData.map((item,index)=><option key={item.id} value={item.id}>{item.title}</option>)
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="Title" className="form-label">Title</label>
                        <input type="text" name='title' value={productData.title} onChange={inputHandler} className="form-control" id="Title" />
                    </div>
                    <div className="mb-3">
                        <label for="Slug" className="form-label">Slug</label>
                        <input type="text" name='slug' value={productData.slug} onChange={inputHandler} className="form-control" id="Slug" />
                    </div>
                    <div className="mb-3">
                        <label for="VND_Price" className="form-label">VND Price</label>
                        <input type="number" name='price' value={productData.price} onChange={inputHandler} className="form-control" id="VND_Price" />
                    </div>
                    <div className="mb-3">
                        <label for="USD_Price" className="form-label">USD_Price</label>
                        <input type="number" name='usd_price' value={productData.usd_price} onChange={inputHandler} className="form-control" id="USD_Price" />
                    </div>

                    <div className="mb-3">
                        <label for="Detail" className="form-label">Detail</label>
                        <textarea className="form-control" name='detail' value={productData.detail} onChange={inputHandler} rows="8" id="Detail"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="Tag_list" className="form-label">Tag List</label>
                        <textarea className="form-control" name='tag_list' value={productData.tag_list} onChange={inputHandler} rows="8" id="Tag_list"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="Demo_URL" className="form-label">Demo URL</label>
                        <input type="url" name='demo_url' value={productData.demo_url} onChange={inputHandler} className="form-control" id="Demo_URL" />
                    </div>
                    <div className="mb-3">
                        <label for="Feqatured_Images" className="form-label">Feqatured Images</label>
                        <input type="file" name='image' className="form-control" onChange={fileHandler} id="Feqatured_Images" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Product_Images" className="form-label">Product Images</label>
                        <input type="file" name='product_imgs' className="form-control" onChange={multipleFileHandler} multiple />
                    </div>
                    <div className="mb-3">
                        <label for="Product_File" className="form-label">Product File</label>
                        <input type="file" name='product_file' className="form-control" onChange={fileHandler} id="Product_File" />
                    </div>
                    
                    <button type="buttom" onClick={submitHandler} className="btn btn-primary">Submit</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        {/* </div> */}
        </div>


    );
}

export default VendorAddProduct;