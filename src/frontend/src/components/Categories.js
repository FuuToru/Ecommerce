import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Categories(){
    return (
        <section className="container mt-4">
            {/* Categories */}
        <h1 className='mb-4'>All Categories
          </h1>
        <div className='row mb-4'>
          {/* category box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title"> <Link to="/category/python/1">Python</Link></h4>
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
                    <h4 className="card-title"> <Link to="/category/python/1">Category title</Link></h4>
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
        {/* Categories end */}
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
export default Categories;