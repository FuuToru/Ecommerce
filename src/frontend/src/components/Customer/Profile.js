//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';
function Profile(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [ProfileData, setProfileData] = useState({
        'user_id':'',
        'first_name':'',
        'last_name':'',
        'username':'',
        'email':'',
        'mobile':'',
        'p_image':''
    });

    var customer_id = localStorage.getItem('customer_id');
    useEffect ( () =>{
        fetchData(baseUrl+'/customer/'+customer_id+"/");
    },[]);
    

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProfileData({
                'user_id': data.user.id,
                'firstName': data.user.first_name,
                'lastName': data.user.last_name,
                'username': data.user.username,
                'email': data.user.email,
                'mobile': data.mobile,
                'p_image': data.profile_img,

            });
            
        });
    
    }

    const inputHandler = (event) =>{
        setProfileData({
            ...ProfileData,
            [event.target.name]:event.target.value
        });
    }

    const handleFileChange = (event) =>{
        setProfileData({
            ...ProfileData,
            [event.target.name]:event.target.files[0]
        });

    }

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('user',ProfileData.user_id);
        formData.append('mobile',ProfileData.mobile);
        formData.append('profile_img',ProfileData.p_image);

        // Submit Data
        axios.put(baseUrl +'/customer/'+customer_id+"/", formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        }).then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });

        const formUserData = new FormData();
        formUserData.append('first_name', ProfileData.first_name);
        formUserData.append('last_name', ProfileData.last_name);
        formUserData.append('username', ProfileData.username);
        formUserData.append('email', ProfileData.email);

        axios.put(baseUrl +'/user/'+ProfileData.user_id+"/", formUserData).then(function (response){
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
                    <h3 className='card-header mb-3'>Welcome <span className='text-primary'>{ProfileData.username}</span></h3>
                    <div className='card'>
                        <h4 className='card-header'>Update Profile</h4>
                        <div className='card-body'>
                    <form>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" name="first_name" onChange={inputHandler} value={ProfileData.first_name} className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" name="last_name" onChange={inputHandler} value={ProfileData.last_name} className="form-control" id="lastName" />
                    </div>

                    <div className="mb-3">
                        <label for="username"className="form-label">Username</label>
                        <input type="text" name="username" onChange={inputHandler}  value={ProfileData.username} className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label for="email"  className="form-label">Email</label>
                        <input type="email" name="email" onChange={inputHandler} value={ProfileData.email} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="mobile"  className="form-label">Mobile</label>
                        <input type="mobile" name="mobile" onChange={inputHandler} value={ProfileData.mobile} className="form-control" id="mobile" />
                    </div>
                    <div className="mb-3">
                        <p>
                            <img src={ProfileData.p_image} width="100" class="mt-3 rounded"></img>
                        </p>
                        <label for="profileImg" className="form-label">Profile Image</label>
                        <input type="file" className="form-control" name="p_image" onChange={handleFileChange} id="profileImg" alt="Upload profile image" />

                    </div>
                    <button type="button" onClick={submitHandler} className="btn btn-primary">Update</button>
                    </form>

                        </div>
                    </div>


                </div>

            </div>
        {/* </div> */}
        </div>


    );
}

export default Profile;