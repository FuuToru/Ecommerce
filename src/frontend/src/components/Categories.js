import logo from '../logo.svg';
function Categories(){
    return (
        <section className="container mt-4">
            {/* Popular Category */}
        <h1 className='mb-4'>All Categories
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
        </section>
    );
}
export default Categories;