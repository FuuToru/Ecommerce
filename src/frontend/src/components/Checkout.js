//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
import ProductDetail from './Checkout';
function Checkout(props){
    return(
        <div className="container mt-4">
            <h1 className='mb-4'>All Item</h1>
            <div className='table-responsive'>
                <table className='table'>
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
                                <img src={logo} className="img-thumbnail" width='80' alt="..."/>
                                <h4>Django</h4>
                            </td>
                            <td>$200</td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
    );
}

export default Checkout;