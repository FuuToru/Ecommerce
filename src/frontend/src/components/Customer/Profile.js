//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import Sidebar from './Sidebar';
function Profile(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Update Profile</h4>
                        <div className='card-body'>
                    <form>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>

                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="img" className="form-label">Profile Image</label>
                        <input type="file" className="form-control" id="img" alt="Upload profile image" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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