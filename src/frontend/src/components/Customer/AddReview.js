//Packages
import { Link } from 'react-router-dom';
//Assets
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
function AddReview(props){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const {product_id} = useParams();
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ErrorMsg, setErrorMsg] = useState('');
    var customer_id = localStorage.getItem('customer_id');
    const [ReviewFormData, setReviewFormData] = useState({
        'review_text':'',
        'rating':1,
    });

    const inputHandler = (event) =>{
        setReviewFormData({
            ...ReviewFormData,
            [event.target.name]:event.target.value
        });
    };

    const submitHandler = (event) =>{
        const formData = new FormData();
        formData.append('reviews',ReviewFormData.review_text);
        formData.append('rating',ReviewFormData.rating);
        formData.append('product',product_id);
        formData.append('customer',customer_id);

        // Submit Data
        axios.post(baseUrl +'/productrating/', formData
        ).then(function (response){
            if(response.status != 201){
                setErrorMsg('Data not saved');
                setSuccessMsg('');
            }else{
                setErrorMsg('');
                setSuccessMsg('Data saved');
                setReviewFormData({
                    'review_text':'',
                    'rating':1
                });
            }
        })
        .catch(function (error){
            console.log(error);
        });

    };
    const disableBtn = (ReviewFormData.review_text == '' || ReviewFormData.rating == '');
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Review</h4>
                    <div className='card-body'>
                        {ErrorMsg && <p className='alert alert-danger'>{ErrorMsg}</p>}
                        {SuccessMsg && <p className='alert alert-success'>{SuccessMsg}</p>}
                    <form>
                    <div className="mb-3">
                        <label for="address" className="form-label">Review</label>
                        <textarea type="text" name="review_text" onChange={inputHandler} value={ReviewFormData.review_text}className="form-control" id="review_text" />
                    </div>
                    <div className='mb-3'>
                        <label for="rating" className="form-label">Rating</label>
                        <select className='form-control' name='rating' onChange={inputHandler} id='rating' >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>

                        </select>

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

export default AddReview;