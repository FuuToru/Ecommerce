// import VendorSidebar from "./VendorSidebar";
// import { useState} from 'react';
// import { Link } from "react-router-dom";
// function VendorDailyReports(){
//     const baseUrl = 'http://127.0.0.1:8000/api/';
//     function fetch_daily_orders(baseUrl){
//         fetch(baseUrl)
//         .then((response) => response.json())
//         .then((data) => {
//             setOrderItems(data.results);
//         })
//     }
//     fetch_daily_orders(baseUrl + '/vendor/' + vendor_id + '/daily-report/');
//     return(
//         <div className='container mt-4'>
//         <div className='row'>
//             <div className='col-md-3 col-12 mb-2'>
//                 <VendorSidebar/>

//             </div>
//             <div className='col-md-9 col-12 mb-2'>
//                 <h3>Daily Reports</h3>
//                 <div className="row mt-2"></div>
//             </div>

//         </div>
//     </div>

//     );
// }

// export default VendorDailyReports;