import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
function CategoryProducts(){
    return (
        <section className='container mt-4'>
        <h1 className='mb-4'> <span className='text-primary'> Python </span> Products
        </h1>
      <div className='row mb-4'>
        <SingleProduct title="Django Project 1"/>
        <SingleProduct title="Django Project 2"/>
        <SingleProduct title="Django Project 3"/>
        <SingleProduct title="Django Project 4"/>
        <SingleProduct title="Django Project 5"/>
        <SingleProduct title="Django Project 6"/>
        <SingleProduct title="Django Project 7"/>
        <SingleProduct title="Django Project 8"/>
        <SingleProduct title="Django Project 9"/>
        <SingleProduct title="Django Project 10"/>

 
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