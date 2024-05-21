import VendorSidebar from "./VendorSidebar";
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';
function VendorMonthlyReports(){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const vendor_id = localStorage.getItem('vendor_id');

    const [dates, setDates] = useState([]);
    const [data, setData] = useState([]);


    function fetch_report(baseUrl){
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.show_chart_monthly_order);
            setDates(data.show_chart_monthly_order.date);
            setData(data.show_chart_monthly_order.data);
        })
    }

    useEffect(() => {
        fetch_report(baseUrl + '/vendor/' + vendor_id + '/');
    }
    , []);

    const chartOptions = {
        options: {
            chart: {
                id : 'basic-bar'
            },
            xaxis: {
                categories: dates
            }
        },
        series: [
            {
                name: 'Orders',
                data: data
            }
        ]
    }

    const chartElement = <Chart options={chartOptions.options} series={chartOptions.series} type="bar" height={350} />


    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar/>

                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <h3>Monthly Reports</h3>
                    <div className="row mt-2"></div>
                        {chartElement}
                </div>

            </div>
        </div>

    );
}

export default VendorMonthlyReports;