import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import {useState,useEffect} from 'react';
function Categories(){
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories,setCategories] = useState([]);
  const [totalResult,setTotalResults]= useState(0);


  useEffect ( () =>{
    fetchData(baseUrl+'/categories/');
  },[]);

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => {
      setCategories(data.data);
      setTotalResults(data.count);
      
    });

  }

  function changeUrl(baseurl){
    fetchData(baseurl);
  }
  var links = [];
  var limit =1;
  var totalLinks = totalResult/limit;
  for(let i=1; i<=totalLinks; i++){
    links.push(<li class='page-item'><Link onClick={()=>changeUrl(baseUrl+`/categories/?page=${i}`)} to={`/categories/?page=${i}`} class='page-link'>{i}</Link></li>)
  }
  return (
        <section className="container mt-4">
            {/* Categories */}
        <h1 className='mb-4'>All Categories
          </h1>
        <div className='row mb-4'>
        {
          categories.map((category)=>           
          <div className='col-12 col-md-3 mb-2'>
          <div className="card">
              <img src={logo} className="card-img-top" alt={category.title}/>
              <div className="card-body">
                  <h4 className="card-title"> <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
              </div>
              <div className='card-footer'>
                Product: 2356
                </div>

          </div>
        </div> )
        }
                    
        </div>
        {/* Categories end */}
        <nav aria-label="Page navigation example">
    <ul className="pagination">
      {links}
    </ul>
    </nav>


        </section>
    );
}
export default Categories;