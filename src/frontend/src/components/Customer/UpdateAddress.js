//Packages
import { Link } from 'react-router-dom';
//Assets
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
function UpdateAddress(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const {address_id} = useParams();
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ErrorMsg, setErrorMsg] = useState('');
    var customer_id = localStorage.getItem('customer_id');
    const [AddressFormData, setAddressFormData] = useState({
        'address':'',
        'customer':'',
    });

    useEffect ( () =>{
        fetchData(baseUrl+'/address/'+address_id+'/');
    },[]);
    

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAddressFormData({
                'address':data.address,
                'customer':data.customer,
            });
        });
    
    }

    const inputHandler = (event) =>{
        setAddressFormData({
            ...AddressFormData,
            [event.target.name]:event.target.value
        });
    };

    const submitHandler = () =>{
        const formData = new FormData();
        formData.append('address',AddressFormData.address);
        formData.append('customer',AddressFormData.customer);

        // Submit Data
        axios.put(baseUrl +'/address/'+parseInt(address_id)+'/', formData
        ).then(function (response){
            console.log(response);
            if(response.status != 200){
                setErrorMsg('Data not saved');
                setSuccessMsg('');
            }else{
                setErrorMsg('');
                setSuccessMsg('Data saved');
            }
        })
        .catch(function (error){
            console.log(error);
        });

    };
    console.log(AddressFormData)
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
                        <h4 className='card-header'>Update Address</h4>
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

export default UpdateAddress;