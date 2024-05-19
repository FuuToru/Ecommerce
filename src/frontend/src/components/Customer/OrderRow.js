
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function OrderRow(props) {
    const index = props.index;
    const item = props.item;
    const baseUrl = 'http://127.0.0.1:8000';
    const [totalDownload, setTotalDownload] = useState(item.product.downloads || 0);

    const countDownloads = (product_id) => {
        const formData = new FormData();
        formData.append('product_id', product_id);

        // Submit Data
        axios.post(baseUrl + '/api/update_product_download_count/' + product_id)
            .then(response => {
                if (response.data.bool === true) {
                    setTotalDownload(prevDownload => prevDownload + 1);
                    const productFileUrl = baseUrl + item.product.product_file;
                    window.open(productFileUrl, '_blank');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                    <img src={item.product.image} className='img-thumbnail' width='80' alt="..."></img>
                </Link>
                <p><Link to={`/product/${item.product.slug}/${item.product.id}`}>{item.product.title}</Link></p>
            </td>
            <td>
                {item.product.price}
            </td>
            <td>
                <span>
                    {item.order.order_status && <i className='fa fa-check-circle text-success'></i>}
                    {!item.order.order_status && <i className='fa fa-spinner fa-spin text-dark'></i>}
                </span>
            </td>
            <td>
                {item.order.order_status && (
                    <button  className='btn btn-primary btn-sm'>
                        Add Reviews 
                    </button>
                )}
            </td>
        </tr>
    );
}

export default OrderRow;


