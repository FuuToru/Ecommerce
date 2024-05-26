import AdminSidebar from "./AdminSidebar";
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';
function AdminDailyReport(){
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

    const ordersByDay = data.map(order => {
        const orderDate = new Date(order.order_time);
        const day = orderDate.toISOString().split('T')[0];
        return { ...order, day };
    });
    
    const ordersCountByDay = ordersByDay.reduce((acc, order) => {
        acc[order.day] = (acc[order.day] || 0) + 1;
        return acc;
    }, {});
    
    const chartData = Object.keys(ordersCountByDay).map(day => ({
        day,
        orders: ordersCountByDay[day]
    }));

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <AdminSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <h3>Daily Reports</h3>
                    <div className="row mt-2"></div>
                    <Chart 
                        options={{
                            xaxis: {
                                categories: chartData.map(data => data.day)
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

export default AdminDailyReport;