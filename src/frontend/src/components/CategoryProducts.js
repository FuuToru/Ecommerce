import logo from '../logo.svg';
function CategoryProducts(){
    return (
        <section className='container mt-4'>
        <h1 className='mb-4'> <span className='text-primary'> Python </span> Products
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
        <nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
    </ul>
    </nav>
      </section>

    );

}
export default CategoryProducts;