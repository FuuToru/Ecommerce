//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
function Dashboard(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4 col-12 mb-2'>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">Dashboard</a>
                    <a href="#" className="list-group-item list-group-item-action">Orders</a>
                    <a href="#" className="list-group-item list-group-item-action">Wishlist</a>
                    <a className="list-group-item list-group-item-action ">Profile</a>
                    <a className="list-group-item list-group-item-action ">Addresses</a>
                    <a className="list-group-item list-group-item-action text-danger ">Logout</a>
                    </div>

                </div>
                <div className='col-md-8 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Wishlist</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Addresses</h4>
                                    <h4><a href="#">5</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Dashboard;