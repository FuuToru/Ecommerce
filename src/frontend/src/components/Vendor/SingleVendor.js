// //Packages
// import { Link } from 'react-router-dom';
// function SingleVendor(props){
//     // const {CurrencyData, setCurrencyData} = useContext(CurrencyContext);
//     return(
//         <div className="col-12 col-md-3 mb-2"  >
//             <div className="card">
//                 <Link to={`/vendor/${props.vendor.id}`}>
//                     <img src={props.vendor.profile_img} className="card-img-top" width={250} height={250} alt={props.vendor.user} />  
//                 </Link>
//                 <div className="card-body">
//                     <h5 className="card-title"><Link to={`/vendor/${props.vendor.id}`}>{props.vendor.user}</Link></h5>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SingleVendor;


import React from 'react';
import logo from '../../logo.svg';
import ProductDetail from '../ProductDetail';

import { Link } from 'react-router-dom';

function SingleVendor({ vendor }) {
  return (
    <div className="col-12 col-md-3 mb-2">
      <div className="card">
        <Link to={`/vendor/${vendor.id}`}>
          <img src={vendor.profile_img || logo} className="card-img-top" width={250} height={250} alt={vendor.user.username} />
        </Link>
        <div className="card-body">
          <h5 className="card-title"><Link to={`/vendor/${vendor.id}`}>{vendor.user.username}</Link></h5>
        </div>
      </div>
    </div>
  );
}

export default SingleVendor;
