import logo from '../logo.svg';
import bg from '../bg-1.avif';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

function ProductDetail(){
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                <div id="productThumbnailSlider" className="carousel
            carousel-dark slide carousel-fade" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo} className='img-thumbnail mb-5' alt='...'></img>

                    </div>
                    <div className="carousel-item">
                        <img src={bg} className='img-thumbnail mb-5' alt='...'></img>

                    </div>
                    <div className="carousel-item">
                        <img src={logo} className='img-thumbnail mb-5' alt='...'></img>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <h5 className="card-title">Price: $500</h5>
                    <p className='mt-3'>
                        <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        <button title = "Buy Now" className='btn btn-warning btn-sm ms-1'><i className="fa-solid fa-bag-shopping"></i> Buy Now</button>
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
            {/* Related product */}
            <h5 className='mt-5 mb-3'>Related Products</h5>
            <div id="relatedProductsSlider" className="carousel
            carousel-dark slide " data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row mb-5'>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>

                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='row mb-5'>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>

                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='row mb-5'>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>
                            <SingleProduct title="Django Project 1"/>

                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
                </div>

            {/* end related product */}



        </section>

    );
}

export default ProductDetail;