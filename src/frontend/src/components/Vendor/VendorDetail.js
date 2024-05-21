import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {useState,useEffect, useContext} from 'react';
import { UserContext, CurrencyContext } from '../../Context';
import SingleProduct from '../SingleProduct';
import SingleVendor from './SingleVendor';
import axios from "axios";


function VendorDetail(){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [ProductList,setProductList] = useState([]);
    const [VendorData,setVendorData] = useState({
        'profile_img':'',
        'user':{
            'username':'',
            'total_products':0,
        }
    });
    const {vendor_username,vendor_id} = useParams();
    const userContext = useContext(UserContext);
    const {CurrencyData} = useContext(CurrencyContext);

    useEffect ( () =>{
        fetchProducts(baseUrl+'/vendor-products/'+vendor_id+'/');
        
        fetchVendor(baseUrl+'/vendor/'+vendor_id+'/')
    },[]);
    
    function fetchProducts(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProductList(data.results);
        });
    
    }
    
    function fetchVendor(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setVendorData(data);
            // console.log(data);
        });
    
    }
    return(
        <section className="container mt-4">
            <div className="row">
                <div className='col-3'>
                    <img src={VendorData.profile_img} className="img-thumbnail" width={250} height={250} alt={VendorData.user} />

                </div>
                <div className='col-9'>
                    {
                        VendorData.user.first_name && <h3>{VendorData.user.first_name} {VendorData.user.last_name}</h3>
                    }
                    {
                        !VendorData.user.first_name && <h3>{VendorData.user.username}</h3>
                    }
                    <p>Total Products: {VendorData.total_products}</p>
                </div>
            </div>
            <div className="row">
            {
            ProductList.map((product) => <SingleProduct key={product.id} product={product} />)       
             }
            </div>
        </section>

    );
}

export default VendorDetail;