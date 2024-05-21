import axios from 'axios';
import { useState } from 'react';

function VendorRegister(props){
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [formData, setFormData] = useState({
        'firstName': '',
        'lastName': '',
        'username': '',
        'email': '',
        'mobile': '',
        'address': '',
        'password': ''
    });

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    
    const submitHandler = () => {
        const formDataToSend = new FormData();
        formDataToSend.append('first_name', formData.firstName);
        formDataToSend.append('last_name', formData.lastName);
        formDataToSend.append('username', formData.username);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('password', formData.password);
    
        axios.post(baseUrl + 'vendor/register/', formDataToSend)
            .then(function(response){
                if (response.data.bool === false) {
                    setErrorMsg(response.data.msg);
                    setSuccessMsg('');
                } else {
                    setFormData({
                        'firstName': '',
                        'lastName': '',
                        'username': '',
                        'email': '',
                        'mobile': '',
                        'address': '',
                        'password': ''
                    });
                    setSuccessMsg(response.data.msg);
                    setErrorMsg('');
                }
            })
            .catch(function(error){
                if (error.response) {
                    // Có phản hồi từ server và server trả về mã lỗi
                    setErrorMsg(error.response.data.msg || "An error occurred on the server.");
                } else if (error.request) {
                    // Yêu cầu đã được gửi nhưng không nhận được phản hồi
                    setErrorMsg("No response was received.");
                } else {
                    // Lỗi khi thiết lập yêu cầu
                    setErrorMsg("Error setting up the request.");
                }
                console.log(error.config);
            });
    };
    const buttonDisabled = !(formData.firstName && formData.lastName && formData.username && formData.email && formData.mobile && formData.password && formData.address);

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Vendor Register</h4>
                        <div className='card-body'>
                            <p className='text-muted'> <strong>Note: </strong> All fields are required </p>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" onChange={inputHandler} value={formData.firstName} name='first_name' className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" onChange={inputHandler} value={formData.lastName} name='last_name' className="form-control" id="lastName" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" onChange={inputHandler} value={formData.username} name='username' className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" onChange={inputHandler} value={formData.email} name='email' className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" onChange={inputHandler} value={formData.mobile} name='mobile' className="form-control" id="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" onChange={inputHandler} value={formData.address} name='address' className="form-control" id="address" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" onChange={inputHandler} value={formData.password} name='password' className="form-control" id="password" />
                                </div>
                                <button type="button" disabled={buttonDisabled} onClick={submitHandler} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorRegister;
