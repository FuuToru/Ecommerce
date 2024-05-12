import { useState, useEffect } from 'react';
import VendorSidebar from './VendorSidebar';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api";
function VendorUpdateProduct(props){
    const {product_id} = useParams();
    const vendor_id = localStorage.getItem('vendor_id');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [imgUploaderrorMsg, setImgUploadeErrorMsg] = useState('');
    const [imgUploadesuccessMsg, setImgUploadeSuccessMsg] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [isFeatureImagesSelected, setIsFeatureImagesSelected] = useState(false);
    const [isFeatureFilesSelected, setIsFeatureFilesSelected] = useState(false);
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
        'product_file':'',
        'product_imgs':''
        
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

        if (event.target.name == 'image') {
            setIsFeatureImagesSelected(true);
        }
        if (event.target.name == 'product_file') {
            setIsFeatureFilesSelected(true);
        }
    };

    const multipleFileHandler = (event) => {
        console.log(event.target.files);
        var files = event.target.files;
        if (files.length > 0) {
            setProductImgs(files);
        }
    };


    const submitHandler = () => {
        const formData = new FormData();
        formData.append('category', formData.category);
        formData.append('vendor', formData.vendor);
        formData.append('title', formData.title);
        formData.append('detail', formData.detail);
        formData.append('price', formData.price);
        formData.append('usd_price', formData.usd_price);
        formData.append('tag_list', formData.tag_list);
        formData.append('slug', formData.slug);
        formData.append('image', formData.image);
        formData.append('demo_url', formData.demo_url);

        axios.patch(baseUrl + '/product/'+product_id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
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
                        'demo_url':''
                    });
                    setErrorMsg("");
                    setSuccessMsg(response.statusText);

                    // Upload Product Images
                    for (let i = 0; i < productImgs.length; i++) {
                        const ImgFormData = new FormData();
                        ImgFormData.append('product', response.data.id);
                        ImgFormData.append('image', productImgs[i]);
                        axios.post(baseUrl + '/product-imgs/', ImgFormData)
                        .then(function(response){
                            console.log(response);
                        })
                        .catch(function(error){
                            console.log(error);    
                        });
                    }

                    setProductImgs('');

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
    
    useEffect (() =>{
        setProductData({
            ...productData,
            'vendor': vendor_id
        });
        fetchData(baseUrl+'/categories/');
        console.log(product_id);
        fetchProductData(baseUrl+'/product/'+product_id+'/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setCategoryData(data.results);
        });
    }

    function fetchProductData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProductData({
                'category':data.category,
                'vendor':data.vendor,
                'title':data.title,
                'detail': data.detail,
                'price':data.price,
                'usd_price':data.usd_price,
                'tag_list':data.tag_list,
                'slug':data.slug,
                'image':data.image,
                'demo_url':data.demo_url,
                'product_file':data.product_file,
                'product_imgs':data.product_imgs
            
            });
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
                        <h4 className='card-header'>Update Product</h4>
                        <div className='card-body'>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                    <form>
                    <div className="mb-3">
                        <label for="Category" className="form-label">Category</label>
                        <select className='form-control' name='category' onChange={inputHandler}>
                            {
                                categoryData.map((item,index)=>{
                                    return <option selected={item.id==productData.category} key={item.id} value={item.id}>{item.title}</option>
                                })
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
                        <img src={productData.image} className='img rounded border mt-2' width='200' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Product_Images" className="form-label">Product Images</label>
                        <input type="file" name='product_imgs' className="form-control" onChange={multipleFileHandler} multiple />
                        {
                            productData.product_imgs && productData.product_imgs.map((item,index)=><img src={item.image} className='m-2 me-2' width='200' />)
                        }
                    </div>
                    <div className="mb-3">
                        <label for="Product_File" className="form-label">Product File</label>
                        <input type="file" name='product_file' className="form-control" onChange={fileHandler} id="Product_File" />
                        <a href={productData.product_file}>{productData.product_file}</a>
                    </div>
                    <button type="buttom" onChange={submitHandler} className="btn btn-primary">Submit</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        {/* </div> */}
        </div>


    );
}

export default VendorUpdateProduct;