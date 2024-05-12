// Packages
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import { useState, useEffect, useContext } from 'react';
import { UserContext, CartContext, CurrencyContext } from '../../Context';
import axios from 'axios';

function AddressList(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const customer_id = localStorage.getItem('customer_id');
    const [AddressList, setAddressList] = useState([]);

    useEffect(() => {
        fetchData(baseUrl + '/customer/' + customer_id + '/address-list/');
    }, []);

    function fetchData(baseUrl) {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setAddressList(data.results);
            });
    }

    

    function DefaultAddressHandler(address_id) {
        const formData = new FormData();
        formData.append('address_id',address_id);

        // Submit Data
        axios.post(baseUrl +'/mark-default-address/'+parseInt(address_id)+'/', formData
        ).then(function (response){
            if(response.data.bool == true){
                window.location.reload();

            }
            console.log(response);
            console.log(AddressList);
        })
        .catch(function (error){
            console.log(error);
        });
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/customer/add-address" className='btn btn-outline-success mb-4 float-end'><i className='fa fa-plus-circle'></i>Add Address</Link>
                        </div>
                    </div>
                    <div className='row'>
                        {AddressList.map((address, index) => {
                            return (
                                <div className='col-4 mb-4' key={index}>
                                    <div className='card'>
                                        <div className='card-body text-muted'>
                                            <h6>
                                                {address.default_address ==true&& 
                                                <span><i className='fa fa-check-circle text-success mb-2'></i><br /></span>}
                                                {!address.default_address && <span onClick={()=>DefaultAddressHandler(address.id)}role='button'><i className='fa fa-check-circle text-secondary mb-2'></i><br /></span>}
                                                <Link to={`/customer/update-address/${address.id}`}>{address.address}</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressList;
