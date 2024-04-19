import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import bg from './bg-1.avif';
import './style.css';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <main className='mt-4'>
        <div className='container'>
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active c-item">
                <img src="https://omisell.com/vi-vn/wp-content/uploads/sites/2/2021/07/Ta%CC%82%CC%81t_ca%CC%89_nhu%CC%9B%CC%83ng_die%CC%82%CC%80u_ca%CC%82%CC%80n_bie%CC%82%CC%81t_ve%CC%82%CC%80_Flashsale_Shopee.png" class="d-block w-100 c-img" alt="Slide 1"/>
                {/* <div class="carousel-caption top-0 mt-4">
                  <p class="mt-5 fs-3 text-uppercase">Discover the hidden world</p>
                  <h1 class="display-1 fw-bolder text-capitalize">The Aurora Tours</h1>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Book a tour</button>
                </div> */}
              </div>
              <div class="carousel-item c-item">
                <img src="https://daotaodigitalmarketing.vn/wp-content/uploads/2021/11/le-Giang-sinh-1024x419.jpg" class="d-block w-100 c-img" alt="Slide 2"/>
                <div class="carousel-caption top-0 mt-4">
                  <p class="text-uppercase fs-3 mt-5">The season has arrived</p>
                  <p class="display-1 fw-bolder text-capitalize">3 available tours</p>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                    data-bs-target="#booking-modal">Book a tour</button>
                </div>
              </div>
              <div class="carousel-item c-item">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="d-block w-100 c-img" alt="Slide 3"/>
                <div class="carousel-caption top-0 mt-4">
                  <p class="text-uppercase fs-3 mt-5">Destination activities</p>
                  <p class="display-1 fw-bolder text-capitalize">Go glacier hiking</p>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                    data-bs-target="#booking-modal">Book a tour</button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* Lastest Product */}
          <h1 className='mb-4'>Lastest Products <a href = "#" className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right"></i></a>
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
        </div>

      </main>
    </>

    );
}
export default App;