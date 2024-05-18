import VendorSidebar from './VendorSidebar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const baseUrl = 'http://127.0.0.1:8000/api';

function VendorProfile(props) {
    const [profileData, setProfileData] = useState({
        user_id: '',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        mobile: '',
        address: '',
        p_image: ''
    });

    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/vendor/' + vendor_id + "/");
    }, [vendor_id]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProfileData({
                user_id: data.user.id,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                username: data.user.username,
                email: data.user.email,
                mobile: data.mobile,
                address: data.address,
                p_image: data.profile_img,
            });
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    const inputHandler = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.files[0]
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('user', profileData.user_id);
        formData.append('mobile', profileData.mobile);
        formData.append('address', profileData.address);
        formData.append('profile_img', profileData.p_image);

        try {
            await axios.put(baseUrl + '/vendor/' + vendor_id + "/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Vendor profile updated successfully');
        } catch (error) {
            console.error('Error updating vendor profile:', error);
        }

        const formUserData = new FormData();
        formUserData.append('first_name', profileData.first_name);
        formUserData.append('last_name', profileData.last_name);
        formUserData.append('username', profileData.username);
        formUserData.append('email', profileData.email);

        try {
            await axios.put(baseUrl + '/user/' + profileData.user_id + "/", formUserData);
            console.log('User profile updated successfully');
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <h3 className='card-header mb-3'>Welcome <span className='text-primary'>{profileData.username}</span></h3>
                    <div className='card'>
                        <h4 className='card-header'>Update Profile</h4>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" name="first_name" onChange={inputHandler} value={profileData.first_name} className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" name="last_name" onChange={inputHandler} value={profileData.last_name} className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" onChange={inputHandler} value={profileData.username} className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" onChange={inputHandler} value={profileData.email} className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" name="mobile" onChange={inputHandler} value={profileData.mobile} className="form-control" id="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea name="address" onChange={inputHandler} value={profileData.address} className="form-control" id="address"></textarea>
                                </div>
                                <div className="mb-3">
                                    <p>
                                        <img src={profileData.p_image} width="100" className="mt-3 rounded" alt="Profile" />
                                    </p>
                                    <label htmlFor="profileImg" className="form-label">Profile Image</label>
                                    <input type="file" className="form-control" name="p_image" onChange={handleFileChange} id="profileImg" />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorProfile;
