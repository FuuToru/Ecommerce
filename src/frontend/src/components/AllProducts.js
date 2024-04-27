import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
function AllProducts(){
  const products = [
    {
      'title': 'Python',
      'price': 100
    },
    {
      'title': 'Django',
      'price': 200
    },
    {
      'title': 'Flask',
      'price': 300
    },
  ]
  fetch('http://127.0.0.1:8000/api/products/',{mode:'no-cors'})
  .then((response) => response.json())
  .then((data) => console.log(data));
    return (
        <section className='container mt-4'>
        <h1 className='mb-4'> All Products
        </h1>
      <div className='row mb-4'>
        {
          products.map((product)=> <SingleProduct product={product}/> )
        }

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
export default AllProducts;