import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function ProductDetail(){
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={logo} className='img-thumbnail' alt="..."/>
                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <h5 className="card-title">Price: $500</h5>
                    <p className='mt-3'>
                        <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        <button title = "Buy Now" className='btn btn-warning btn-sm ms-1'><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>
                        <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i> Wishlist</button>
                    </p>
                    <div className='producttags mt-4'>
                        <h5>Tags</h5>
                        <p >
                            <Link to="#" className='badge bg-secondary text-white me-1'>python</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>django</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>web scripts</Link>

                        </p>
                    </div>

                </div>
            </div>


        </section>

    );
}

export default ProductDetail;