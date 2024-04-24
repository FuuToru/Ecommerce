//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
function Checkout(props){
    return(
        <div className='container mt-4'>
            <h1 className='mb-4'>All Items (4)</h1>
            <div className='row'>
                <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>

                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link>
                                <img src={logo} className='img-thumbnail' width ='80' alt='...'></img>
                                <p>Django</p></Link>


                            </td>
                            <td>
                                Rs. 500
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <Link>
                                <img src={logo} className='img-thumbnail' width ='80' alt='...'></img>
                                <p>Flask</p></Link>


                            </td>
                            <td>
                                Rs. 500
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <Link>
                                <img src={logo} className='img-thumbnail' width ='80' alt='...'></img>
                                <p>Python</p></Link>


                            </td>
                            <td>
                                Rs. 500
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <Link>
                                <img src={logo} className='img-thumbnail' width ='80' alt='...'></img>
                                <p>C++</p></Link>


                            </td>
                            <td>
                                Rs. 500
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>

                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                                Rs. 2000
                            </th>

                        </tr>
                        <tr>
                                <td colSpan='3' align="center" >
                                    <Link to='/categories' className='btn btn-secondary'>  Continue Shopping</Link>
                                    <Link className='btn btn-primary ms-1'>Proceed to Payment</Link>


                                </td>
                        </tr>

                    </tfoot>

                </table>
            </div>

                </div>

            </div>
        </div>


    );
}

export default Checkout;