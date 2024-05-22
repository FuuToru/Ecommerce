//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
import { useContext } from 'react';
import { CurrencyContext } from '../Context';
import styles from './CSS/styles.module.css'; // assuming you're using CSS modules
function SingleTagProduct(props){
    const { CurrencyData } = useContext(CurrencyContext);
    return(
        <>
        {/* product box */}
        <div className="col-4 offset-4 mb-4"  >
            <div className="card">
                <Link to={`/product/${props.product.title}/${props.product.id}`} className={styles['custom-link']}>
                <img src={props.product.image} className="card-img-top" alt="..."/>  </Link>
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`} className={styles['custom-link']}>{props.product.title}</Link></h4>
                </div>
                <div className='card-footer'>
                <h5 className="card-title text-danger">
                        Price: {CurrencyData === 'usd' ? `$${props.product.usd_price}` : `${props.product.price} VND`}
                    </h5>
                </div>

            </div>
        </div>
        {/* product box end */}
        </>

    );
}

export default SingleTagProduct;