// import axios from 'axios';
// import { useState } from 'react';
// function Register(props){
//     const baseUrl = 'http://127.0.0.1:8000/api/';
//     const [errorMsg, setErrorMsg] = useState('');
//     const [successMsg, setSuccessMsg] = useState('');
//     const [formData, setFormData] = useState({
//         'firstName': '',
//         'lastName': '',
//         'username': '',
//         'email': '',
//         'mobile': '',
//         'password': ''
//     });
//     const inputHandler = (e) => {
//         setFormData({...formData, [e.target.id]: e.target.value})
//     };

//     const submitHandler = (e) => {
//         const formData = new FormData();
//         formData.append('first_name', formData.firstName);
//         formData.append('last_name', formData.lastName);
//         formData.append('username', formData.username);
//         formData.append('email', formData.email);
//         formData.append('mobile', formData.mobile);
//         formData.append('password', formData.password);

//         axios.post(baseUrl+'customer/register/', formData).then(function(response){
//             if (response.data.bool=== false){
//                 setErrorMsg(response.data.msg);
//                 setSuccessMsg('');
//             }
//             else{
//                 setFormData({
//                     'firstName': '',
//                     'lastName': '',
//                     'username': '',
//                     'email': '',
//                     'mobile': '',
//                     'password': ''
//                 });
                
//                 setSuccessMsg(response.data.msg);
//                 setErrorMsg('');
//             }
//         }
//         ).catch(function(error){
//             if (error.response) {
//                 // Có phản hồi từ server và server trả về mã lỗi
//                 setErrorMsg(error.response.data.msg || "An error occurred on the server.");
//             } else if (error.request) {
//                 // Yêu cầu đã được gửi nhưng không nhận được phản hồi
//                 setErrorMsg("No response was received.");
//             } else {
//                 // Lỗi khi thiết lập yêu cầu
//                 setErrorMsg("Error setting up the request.");
//             }
//             console.log(error.config);
//         });
    
//     };

//     const buttoneEnable = !(formData.firstName && formData.lastName && formData.username && formData.email && formData.mobile && formData.password);

//     return(
//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-8 col-12 offset-2'>
//                     <div className='card'>
//                         <h4 className='card-header'>Register</h4>
//                         <div className='card-body'>
//                         <p className='text-muted'> <strong>Note: </strong> All fields are required </p>
//                         {successMsg && <p className='text-success'>{successMsg}</p>}
//                         {errorMsg && <p className='text-danger'>{errorMsg}</p>}
//                         <form>
//                             <div className="mb-3">
//                                 <label for="firstName" className="form-label">First Name</label>
//                                 <input type="text" onChange={inputHandler} value={formData.firstName} name='first_name' className="form-control" id="firstName" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="lastName" className="form-label">Last Name</label>
//                                 <input type="text" onChange={inputHandler} value={formData.lastName} name='last_name' className="form-control" id="lastName" />
//                             </div>

//                             <div className="mb-3">
//                                 <label for="username" className="form-label">Username</label>
//                                 <input type="text" onChange={inputHandler} value={formData.username} name='username' className="form-control" id="username" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="email" className="form-label">Email</label>
//                                 <input type="email" onChange={inputHandler} value={formData.email} name='email' className="form-control" id="email" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="mobile" className="form-label">Mobile</label>
//                                 <input type="text" onChange={inputHandler} value={formData.mobile} name='mobile' className="form-control" id="mobile" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="password" className="form-label">Password</label>
//                                 <input type="password" onChange={inputHandler} value={formData.password} name='password' className="form-control" id="password" />
//                             </div>
//                             <button type="submit" disabled={buttoneEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
//                         </form>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>


//     );
// }

// export default Register;

import axios from 'axios';
import { useState } from 'react';

function Register(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        mobile: '',
        password: ''
    });

    const inputHandler = (e) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();  // Prevents the default form submission behavior
        const formPayload = new FormData();
        formPayload.append('first_name', formData.firstName);
        formPayload.append('last_name', formData.lastName);
        formPayload.append('username', formData.username);
        formPayload.append('email', formData.email);
        formPayload.append('mobile', formData.mobile);
        formPayload.append('password', formData.password);

        try {
            const response = await axios.post(baseUrl + 'customer/register/', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.bool === false) {
                setErrorMsg(response.data.msg);
                setSuccessMsg('');
            } else {
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    mobile: '',
                    password: ''
                });
                setSuccessMsg(response.data.msg);
                setErrorMsg('');
            }
        } catch (error) {
            if (error.response) {
                setErrorMsg(error.response.data.msg || "An error occurred on the server.");
            } else if (error.request) {
                setErrorMsg("No response was received.");
            } else {
                setErrorMsg("Error setting up the request.");
            }
        }
    };

    const buttonEnabled = formData.firstName && formData.lastName && formData.username && formData.email && formData.mobile && formData.password;

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>

                        <h4 className='card-header'>Register</h4>
                        <div className='card-body'>
                            <p className='text-muted'> <strong>Note: </strong> All fields are required </p>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" onChange={inputHandler} value={formData.firstName} className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" onChange={inputHandler} value={formData.lastName} className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" onChange={inputHandler} value={formData.username} className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" onChange={inputHandler} value={formData.email} className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" onChange={inputHandler} value={formData.mobile} className="form-control" id="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" onChange={inputHandler} value={formData.password} className="form-control" id="password" />
                                </div>
                                <button type="submit" disabled={!buttonEnabled} className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
