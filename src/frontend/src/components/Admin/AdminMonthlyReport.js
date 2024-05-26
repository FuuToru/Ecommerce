import AdminSidebar from "./AdminSidebar";
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';
function AdminMonthlyReport(){
    const baseUrl = 'http://127.0.0.1:8000/api';

    const [data, setData] = useState([]);


    function fetch_report(url){
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setData(data.results);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        fetch_report(baseUrl + '/orders/');
    }
    , []);

    console.log(data);

    const ordersByMonth = data.map(order => {
        const orderDate = new Date(order.order_time);
        const month = orderDate.toLocaleString('default', { month: 'long' });
        return { ...order, month };
    });
    
    const ordersCountByMonth = ordersByMonth.reduce((acc, order) => {
        acc[order.month] = (acc[order.month] || 0) + 1;
        return acc;
    }, {});
    
    const chartData = Object.keys(ordersCountByMonth).map(month => ({
        month,
        orders: ordersCountByMonth[month]
    }));

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <AdminSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <h3>Monthly Reports</h3>
                    <div className="row mt-2"></div>
                    <Chart 
                        options={{
                            xaxis: {
                                categories: chartData.map(data => data.month)
                            }
                        }} 
                        series={[{ data: chartData.map(data => data.orders) }]} 
                        type="bar" 
                        height={350} 
                    />
                </div>

            </div>
        </div>

    );
}

export default AdminMonthlyReport;