//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import {useState} from 'react';
import axios from 'axios';
function Login(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [formError, setFormError] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        'username':'',
        'password':''
    });

    const inputHandler = (event) =>{
        setLoginFormData({
            ...loginFormData,
            [event.target.name]:event.target.value
        })
    };

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password',loginFormData.password);

        // Submit Data
        axios.post(baseUrl +'/customer/login/', formData).then(function (response){
            if(response.data.bool==false){
                setFormError(true);
                seterrorMsg(response.data.msg);
            }else{

                console.log(response.data);
                localStorage.setItem('customer_id',response.data.id);
                localStorage.setItem('customer_login',true);
                localStorage.setItem('customer_username',response.data.user);
                setFormError(false);
                seterrorMsg('');
            }
        })
        .catch(function (error){
            console.log(error);
        });
    };

    const checkCustomer = localStorage.getItem('customer_login');
    if(checkCustomer){
        window.location.href='/customer/dashboard';
    }

    const buttonEnable = (loginFormData.username!='') && (loginFormData.password!='');
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                        {errorMsg && <p>{errorMsg}</p> }
                    <form>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={inputHandler} name='username' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pwd" onChange={inputHandler} name='password' />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submitHandler} >Submit</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
}

export default Login;