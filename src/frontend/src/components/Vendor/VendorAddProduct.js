//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';
import VendorSidebar from './VendorSidebar';
function VendorAddProduct(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar/>

                </div>
            {/* <div className='row'> */}
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Product</h4>
                        <div className='card-body'>
                    <form>
                    <div className="mb-3">
                        <label for="Category" className="form-label">Category</label>
                        <select className='form-control'>
                            <option>Python</option>
                            <option>Php</option>
                            <option>Js</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" />
                    </div>
                    <div className="mb-3">
                        <label for="Price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="Price" />
                    </div>

                    <div className="mb-3">
                        <label for="Description" className="form-label">Description</label>
                        <textarea className="form-control " rows="8" id="Description"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="img" className="form-label">Product Image</label>
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

export default VendorAddProduct;