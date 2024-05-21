import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SingleProduct from './SingleProduct';

function Search() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState(0);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';


  useEffect(() => {
    if (query) {
      fetchData(`${baseUrl}/search/?query=${query}`);
    }else{
        setProducts([]);
    }
  }, [query]);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
            setProducts(data.results);
            setTotalResults(data.count);
        }else{
            setProducts([]);
        }
      });
  }

  function changeUrl(url) {
    fetchData(url);
  }

  const links = [];
  const limit = 12;
  const totalLinks = Math.ceil(totalResult / limit);

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className='page-item' key={i}>
        <Link
          onClick={() => changeUrl(`${baseUrl}/search/?query=${query}&page=${i}`)}
          to={`/search/?query=${query}&page=${i}`}
          className='page-link'
        >
          {i}
        </Link>
      </li>
    );
  }
  console.log(products);

  return (
    <section className='container mt-4'>
      <h1 className='mb-4'>Search Results</h1>
        <div className='row mb-4'>
            {
                products.length > 0 ? products.length && products.map((product)=> <SingleProduct product={product}/> ) : <h2>No products found</h2>
            }
        </div>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            {links}
          </ul>
        </nav>
    </section>
  );
}

export default Search;
