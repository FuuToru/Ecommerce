import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';
function Home(){
    return (
        <main className='mt-4'>
        <div className='container'>
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active c-item">
                <img src="https://elise.vn/media/wysiwyg/ECOM/cv-1604.png" className="d-block w-100 c-img" alt="Slide 1"/>
                {/* <div className="carousel-caption top-0 mt-4">
                  <p className="mt-5 fs-3 text-uppercase">Discover the hidden world</p>
                  <h1 className="display-1 fw-bolder text-capitalize">The Aurora Tours</h1>
                  <button className="btn btn-primary px-4 py-2 fs-5 mt-5">Book a tour</button>
                </div> */}
              </div>
              <div className="carousel-item c-item">
                <img src="https://daotaodigitalmarketing.vn/wp-content/uploads/2021/11/le-Giang-sinh-1024x419.jpg" className="d-block w-100 c-img" alt="Slide 2"/>
                <div className="carousel-caption top-0 mt-4">
                  <p className="text-uppercase fs-3 mt-5">The season has arrived</p>
                  <p className="display-1 fw-bolder text-capitalize">3 available tours</p>
                  <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                    data-bs-target="#booking-modal">Book a tour</button>
                </div>
              </div>
              <div className="carousel-item c-item">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" className="d-block w-100 c-img" alt="Slide 3"/>
                <div className="carousel-caption top-0 mt-4">
                  <p className="text-uppercase fs-3 mt-5">Destination activities</p>
                  <p className="display-1 fw-bolder text-capitalize">Go glacier hiking</p>
                  <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                    data-bs-target="#booking-modal">Book a tour</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Lastest Product */}
          <h1 className='mb-4'>Lastest Products <Link to = "/products" className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right"></i></Link>
          </h1>
        <div className='row mb-4'>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>
            <SingleProduct title="Django Project 1"/>

        </div>
        {/* Lastest Product end */}
        {/* Popular Category */}
        <h1 className='mb-4'>Popular Categories <a href = "#" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></a>
          </h1>
        <div className='row mb-4'>
          {/* category box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product: 2356
                  </div>

            </div>
          </div>
          {/* category box end */}
                    {/* category box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product: 2356
                  </div>

            </div>
          </div>
          {/* category box end */}
                    {/* category box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product: 2356
                  </div>

            </div>
          </div>
          {/* category box end */}
                    {/* category box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product: 2356
                  </div>

            </div>
          </div>
          {/* category box end */}
        
        </div>
        {/* Popular category end */}
         {/* Popular Product */}
        <h1 className='mb-4'>Popular Products <a href = "#" className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right"></i></a>
          </h1>
        <div className='row mb-4'>
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className='card-footer'>
                  <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                  <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                  </div>

            </div>
          </div>
          {/* product box end */}
                    {/* product box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className='card-footer'>
                  <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                  <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                  </div>

            </div>
          </div>
          {/* product box end */}
                    {/* product box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className='card-footer'>
                  <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                  <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                  </div>

            </div>
          </div>
          {/* product box end */}
                    {/* product box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className='card-footer'>
                  <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                  <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                  </div>

            </div>
          </div>
          {/* product box end */}
                    {/* product box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className='card-footer'>
                  <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                  <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                  </div>

            </div>
          </div>
          {/* product box end */}
        </div>
        {/* Popular Product end */}
        {/* Popular Seller */}
        <h1 className='mb-4'>Popular Sellers <a href = "#" className='float-end btn btn-sm btn-dark m-2'>View All Sellers<i className="fa-solid fa-arrow-right"></i></a>
          </h1>
        <div className='row mb-4'>
          {/* seller box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Shill</a>
                  </div>

            </div>
          </div>
          {/* seller box end */}
                    {/* seller box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Shill</a>
                  </div>

            </div>
          </div>
          {/* seller box end */}
                    {/* seller box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Shill</a>
                  </div>

            </div>
          </div>
          {/* seller box end */}
                    {/* seller box */}
                    <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                </div>
                <div className='card-footer'>
                  Categories: <a href="#">Shill</a>
                  </div>

            </div>
          </div>
          {/* seller box end */}
        {/* Popular Seller end */}
        </div>
      {/* Rating and reviews */}
      <div id="carouselExampleIndicators" className="carousel slide mt-4 border bg-dark text-white p-5" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <cite title="Source Title">Customer Name</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item ">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-start"></i> <cite title="Source Title">Customer Name</cite>
              </figcaption>
            </figure>          </div>
          <div className="carousel-item ">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Rating and reviews end */}

        </div>

      </main>
    );
}

export default Home;