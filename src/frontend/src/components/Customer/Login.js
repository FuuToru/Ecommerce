import React, { useState } from 'react';  // Make sure React is imported if you're using JSX
import axios from 'axios';
function Login(props) {
    const baseUrl='http://127.0.0.1:8000/api/';
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();  
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);

        // Sumitdata
        axios.post(baseUrl+'customer/login/', formData)
        .then(function (response) {

            if (response.data.bool===false){
                setFormError(true);
                setErrorMsg(response.data.msg);
            }else{
                localStorage.setItem('customer_id',response.data.customer_id);
                localStorage.setItem('customer_login',response.data.bool);
                localStorage.setItem('customer_username', response.data.username);
                localStorage.setItem('customer_email', response.data.email);
                localStorage.setItem('customer_mobile', response.data.mobile);
                localStorage.setItem('customer_profileImg', response.data.profile_img);
                setFormError(false);
                setErrorMsg('');
                console.log(localStorage);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer){
        window.location.href = '/customer/dashboard';
    }
    const buttonEnable = (loginFormData.username !== '') && (loginFormData.password !== '');

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-md-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                            {formError && 
                                <p className="text-danger">{errorMsg}</p>
                            }
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" onChange={inputHandler} value={loginFormData.username} className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" onChange={inputHandler} value={loginFormData.password} className="form-control" id="password" />
                                </div>
                                <button type="submit" disabled={!buttonEnable} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

    