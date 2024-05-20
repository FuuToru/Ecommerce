import logo from '../logo.svg';
import SingleVendor from './Vendor/SingleVendor';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllVendors() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [VendorList, setVendorList] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + '/vendors/');
  }, []);

  function fetchData(baseurl) {
    console.log('Fetching data from:', baseurl);
    fetch(baseurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setVendorList(data.results);
        setTotalResults(data.count);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  var links = [];
  var limit = 12;
  var totalLinks = Math.ceil(totalResult / limit);
  console.log('Total links:', totalLinks);
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className='page-item' key={i}>
        <Link
          onClick={() => changeUrl(baseUrl + `/vendors/?page=${i}`)}
          to={`/vendors/?page=${i}`}
          className='page-link'
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className='container mt-4'>
      <h1 className='mb-4'> All Vendors</h1>
      <div className='row mb-4'>
        {VendorList.length > 0 ? (
          VendorList.map((vendor) => <SingleVendor key={vendor.id} vendor={vendor} />)
        ) : (
          <p>No vendors found.</p>
        )}
      </div>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>{links}</ul>
      </nav>
    </section>
  );
}

export default AllVendors;
