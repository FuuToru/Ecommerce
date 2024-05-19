import Sidebar from './Sidebar';
import {useState} from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function ChangePassword(props){
    const [PasswordData, setPasswordData] = useState({
        'password':'',
        'c_password':'',
    });
    const [ConfirmError, setConfirmError] = useState(false);
    var customer_id = localStorage.getItem('customer_id');
    console.log(customer_id);
    const inputHandler = (event) =>{
        setPasswordData({
            ...PasswordData,
            [event.target.name]:event.target.value
        });
        console.log(PasswordData);

    };
    const submitHandler = (event) =>{
        if(PasswordData.password == PasswordData.c_password){
            setConfirmError(false);
        }else{
            setConfirmError(true);
        }
        const formData = new FormData();
        formData.append('password',PasswordData.password);

        // Submit Data
        axios.post(baseUrl +'/customer-change-pasword/'+customer_id, formData)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    };
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    {
                        ConfirmError && <p className='text-danger'>Password does not match </p>
                    }
                    <div className='card'>
                        <h4 className='card-header'>Change Password</h4>
                        <div className='card-body'>
                    
                        <div className="mb-3">
                            <label for="pwd" className="form-label">New Password</label>
                            <input type="password" name='password' value={PasswordData.password} onChange={inputHandler} className="form-control" id="pwd" />
                        </div>
                        <div className="mb-3">
                            <label for="cpwd" className="form-label">Confirm Password</label>
                            <input type="password" name='c_password' value={PasswordData.c_password} onChange={inputHandler} className="form-control" id="cpwd" />
                        </div>
                        <button type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>

                        </div>
                    </div>


                </div>

            </div>
        {/* </div> */}
        </div>


    );
}

export default ChangePassword;