import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
function AllProducts(){
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products,setProducts] = useState([]);
  const [totalResult,setTotalResults]= useState(0);


  useEffect ( () =>{
    fetchData(baseUrl+'/products/');
  },[]);

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.results);
      setTotalResults(data.count);
      
    });

  }

  function changeUrl(baseurl){
    fetchData(baseurl);
  }

  var links = [];
  var limit = 12;
  var totalLinks = totalResult/limit;
  for(let i=1; i<=totalLinks; i++){
    links.push(<li class='page-item'><Link onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} to={`/products/?page=${i}`} class='page-link'>{i}</Link></li>)
  }
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
            {links}
          </ul>
    </nav>
      </section>

    );

}
export default AllProducts;