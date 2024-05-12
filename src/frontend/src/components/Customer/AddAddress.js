//Packages
import { Link } from 'react-router-dom';
//Assets
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import {useState} from 'react';
import axios from 'axios';
function AddAddress(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ErrorMsg, setErrorMsg] = useState('');
    var customer_id = localStorage.getItem('customer_id');
    const [AddressFormData, setAddressFormData] = useState({
        'address':'',
        'customer':customer_id,
    });

    const inputHandler = (event) =>{
        setAddressFormData({
            ...AddressFormData,
            [event.target.name]:event.target.value
        });
    };

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('address',AddressFormData.address);
        formData.append('customer',AddressFormData.customer);

        // Submit Data
        axios.post(baseUrl +'/address/', formData
        ).then(function (response){
            if(response.status != 201){
                setErrorMsg('Data not saved');
                setSuccessMsg('');
            }else{
                setErrorMsg('');
                setSuccessMsg('Data saved');
                setAddressFormData({
                    'address':''
                });
            }
        })
        .catch(function (error){
            console.log(error);
        });

    };
    const disableBtn = (AddressFormData.address == '');
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Address</h4>
                    <div className='card-body'>
                        {ErrorMsg && <p className='alert alert-danger'>{ErrorMsg}</p>}
                        {SuccessMsg && <p className='alert alert-success'>{SuccessMsg}</p>}
                    <form>
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <textarea type="text" name="address" onChange={inputHandler} value={AddressFormData.address}className="form-control" id="address" />
                    </div>

                    <button type="button" disabled={disableBtn} onClick={submitHandler} className="btn btn-primary">Submit</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        {/* </div> */}
        </div>


    );
}

export default AddAddress;