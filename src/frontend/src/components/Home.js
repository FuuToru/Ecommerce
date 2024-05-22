import { Link } from 'react-router-dom';
import banner1 from '../banner/banner1.jpeg';
import banner2 from '../banner/banner2.jpeg';
import banner3 from '../banner/banner3.jpeg';
import logo from '../logo.svg';
import AllProducts from './AllProducts';
import SingleVendor from './Vendor/SingleVendor';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';
import styles from './CSS/styles.module.css'; // assuming you're using CSS modules

function Home() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [vendorList, setVendorList] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + '/products/?fetch_limit=4');
    fetchCategories(baseUrl + '/categories/?fetch_limit=4');
    fetchPopularVendors(baseUrl + '/vendors/?fetch_limit=4');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      });
  }

  function fetchCategories(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);

      });
  }

  function fetchPopularVendors(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setVendorList(data.results);
      });
  }

  return (
    <main className='mt-4'>
      <div className='container'>
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-interval="500">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active c-item">
              <img src={banner1} class="d-block w-100 c-img" alt="Slide 1" />
            </div>
            <div class="carousel-item c-item">
              <img src={banner2} class="d-block w-100 c-img" alt="Slide 2" />
            </div>
            <div class="carousel-item c-item">
              <img src={banner3} class="d-block w-100 c-img" alt="Slide 3" />
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
        <h1 className='mb-4'>Lastest Products <Link to="/products" className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right"></i></Link>
        </h1>
        <div className='row mb-4'>
          {
            products.map((product) => <SingleProduct product={product} />)
          }

        </div>
        {/* Lastest Product end */}
        {/* Popular Category */}
        <h1 className='mb-4'>Popular Categories <Link to="/categories" className='float-end btn btn-sm btn-dark m-2'>View All Categories<i className="fa-solid fa-arrow-right"></i></Link>
        </h1>
        <div className='row mb-4'>
          {/* category box */}
          {
            categories.map((category) =>
              <div className='col-12 col-md-3 mb-2'>
                <div className="card">
                  <img src={category.category_img} width={250} height={250} className="card-img-top" alt={category.title} />
                  <div className="card-body">
                    <h4 className="card-title"> <Link to={`/category/${category.title}/${category.id}`} className={styles['custom-link']}>{category.title} </Link></h4>
                  </div>
                  <div className='card-footer'>
                    Product: 2356
                  </div>

                </div>
              </div>)
          }

          {/* category box end */}

        </div>
        {/* Popular category end */}
        {/* Popular Product */}
        <h1 className='mb-4'>Popular Products <a href="#" className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right"></i></a>
        </h1>
        <div className='row mb-4'>
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: $500</h5>
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box end */}
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: $500</h5>
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box end */}
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: $500</h5>
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box end */}
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: $500</h5>
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box end */}
          {/* product box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: $500</h5>
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box end */}
        </div>
        {/* Popular Product end */}
        {/* Popular Seller */}
        <h1 className='mb-4'>Popular Sellers <Link to="/vendors" className='float-end btn btn-sm btn-dark m-2'>View All Sellers<i className="fa-solid fa-arrow-right"></i></Link>
        </h1>
        <div className='row mb-4'>
          {
            vendorList.map((vendor) => <SingleVendor vendor={vendor} />)
          }
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