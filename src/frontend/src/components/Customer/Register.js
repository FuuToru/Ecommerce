//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import axios from 'axios';
import {useState} from 'react';

//Note Bugs: Password went sent to database hash table error( can't login with account register because password input different with password in database!!!)

function Register(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [formError, setFormError] = useState(false);
    const [successMsg, setsuccessMsg] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [registerFormData, setRegisterFormData] = useState({
        'first_name':'',
        'last_name':'',
        'username':'',
        'email':'',
        'password':'',
        'mobile':'',
    });

    const inputHandler = (event) =>{
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]:event.target.value
        })
    };

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('username', registerFormData.username);
        formData.append('email', registerFormData.email);
        formData.append('password',registerFormData.password);
        formData.append('mobile',registerFormData.mobile);

        // Submit Data
        axios.post(baseUrl +'/customer/register/', formData).then(function (response){
            if(response.data.bool==false){
                setFormError(true);
                seterrorMsg(response.data.msg);
            }else{
                setRegisterFormData({
                    'first_name':'',
                    'last_name':'',
                    'username':'',
                    'email':'',
                    'password':'',
                    'mobile':'',

                });

                setFormError(false);
                setsuccessMsg(response.data.msg);
            }
        })
        .catch(function (error){
            console.log(error);
        });
    };

    const buttonEnable = (registerFormData.first_name!='') && (registerFormData.last_name!='') && (registerFormData.username!='') && (registerFormData.password!='') && (registerFormData.email!='')&& (registerFormData.mobile!='') ;
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>

                        <h4 className='card-header'>Register</h4>
                    <div className='card-body'>
                    <p className='text-muted'><strong>Note:</strong>All fields are required</p>
                    {successMsg && <p>{successMsg}</p> }
                    <form>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" onChange={inputHandler} value={registerFormData.first_name} className="form-control" id="firstName" name="first_name" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" onChange={inputHandler} value={registerFormData.last_name} className="form-control" id="lastName" name="last_name" />
                    </div>

                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" onChange={inputHandler} value={registerFormData.username} className="form-control" id="username" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" onChange={inputHandler} value={registerFormData.email} className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="mobile" className="form-label">Mobile</label>
                        <input type="number" onChange={inputHandler} value={registerFormData.mobile} className="form-control" id="mobile" name="mobile" />
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Password</label>
                        <input type="password" onChange={inputHandler} value={registerFormData.password} className="form-control" id="pwd" name="password" />
                    </div>
                    <button  disabled={!buttonEnable} type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
}

export default Register;