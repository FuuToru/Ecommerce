// Packages
import { useContext } from 'react';
// Assets
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
import { CurrencyContext } from '../Context';
import styles from './CSS/styles.module.css'; // assuming you're using CSS modules

function SingleTagProduct(props) {
    const { CurrencyData } = useContext(CurrencyContext);

    const handleClick = () => {
        window.location.href = `/product/${props.product.title}/${props.product.id}`;
    };

    return (
        <>
        {/* product box */}
            <div className="card" onClick={handleClick}>
                <div className={styles['custom-link']}>
                    <img src={props.product.image} className="card-img-top" alt="..." width={250} height={250}/>  
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <div className={styles['custom-link']}>
                            {props.product.title}
                        </div>
                    </h4>
                </div>
                <div className='card-footer'>
                    <h5 className="card-title text-danger">
                        Price: {CurrencyData === 'usd' ? `$${props.product.usd_price}` : `${props.product.price} VND`}
                    </h5>
                </div>
            </div>
        {/* product box end */}
        </>
    );
}

export default SingleTagProduct;
