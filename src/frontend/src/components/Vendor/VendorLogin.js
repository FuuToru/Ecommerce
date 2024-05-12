// import React, { useState } from 'react';  // Make sure React is imported if you're using JSX
// import axios from 'axios';
// function Login(props) {
//     const baseUrl='http://127.0.0.1:8000/api/';
//     const [formError, setFormError] = useState(false);
//     const [errorMsg, setErrorMsg] = useState('');
//     const [loginFormData, setLoginFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const inputHandler = (event) => {
//         setLoginFormData({
//             ...loginFormData,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();  
//         const formData = new FormData();
//         formData.append('username', loginFormData.username);
//         formData.append('password', loginFormData.password);

//         // Sumitdata
//         axios.post(baseUrl+'vendor/login/', formData)
//         .then(function (response) {

//             if (response.data.bool===false){
//                 setFormError(true);
//                 setErrorMsg(response.data.msg);
//             }else{
//                 localStorage.setItem('vendor_login',true);
//                 localStorage.setItem('vendor_username', response.data.username);
//                 setFormError(false);
//                 setErrorMsg('');
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     };

//     const checkVendor = localStorage.getItem('vendor_login');
//     console.log(checkVendor);
//     // if (checkVendor){
//     //     window.location.href = '/vendor/dashboard';
//     // }
//     const buttonEnable = (loginFormData.username !== '') && (loginFormData.password !== '');

//     return (
//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-8 col-12 offset-md-2'>
//                     <div className='card'>
//                         <h4 className='card-header'>Login</h4>
//                         <div className='card-body'>
//                             {formError && 
//                                 <p className="text-danger">{errorMsg}</p>
//                             }
//                             <form onSubmit={submitHandler}>
//                                 <div className="mb-3">
//                                     <label htmlFor="username" className="form-label">Username</label>
//                                     <input type="text" name="username" onChange={inputHandler} value={loginFormData.username} className="form-control" id="username" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="password" className="form-label">Password</label>
//                                     <input type="password" name="password" onChange={inputHandler} value={loginFormData.password} className="form-control" id="password" />
//                                 </div>
//                                 <button type="submit" disabled={!buttonEnable} className="btn btn-primary">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState, useEffect } from 'react';  // Import useEffect
import axios from 'axios';

function Login(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        // Kiểm tra khi component mount
        const checkVendor = localStorage.getItem('vendor_login');
        if (checkVendor) {
            window.location.href = '/vendor/dashboard';
        }
    }, []);

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

        axios.post(baseUrl + 'vendor/login/', formData)
        .then(function (response) {
            if (response.data.bool === false) {
                setFormError(true);
                setErrorMsg(response.data.msg);
            } else {
                localStorage.setItem('vendor_login', true);
                localStorage.setItem('vendor_username', response.data.username);
                setFormError(false);
                setErrorMsg('');
                // window.location.href = '/vendor/dashboard'; 
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const buttonEnable = (loginFormData.username !== '') && (loginFormData.password !== '');
    const checkVendor = localStorage.getItem('vendor_login');
    if (checkVendor) {
        window.location.href = '/vendor/dashboard';
    }
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
