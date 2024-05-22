import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrencyContext } from '../Context';
import styles from './CSS/styles.module.css'; // assuming you're using CSS modules
import logo from '../logo.svg'; // Ensure this is used or remove it if unnecessary

function SingleProduct({ product }) {
    const { CurrencyData } = useContext(CurrencyContext);

    return (
        <div className="col-12 col-md-3 mb-2">
            <div className="card">
                <Link to={`/product/${product.title}/${product.id}`} className={styles['custom-link']}>
                    <img src={product.image} className="card-img-top" width={250} height={250} alt={product.title} />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to={`/product/${product.title}/${product.id}`} className={styles['custom-link']}>
                            {product.title}
                        </Link>
                    </h4>
                </div>
                <div className="card-footer">
                    <h5 className="card-title text-danger">
                        Price: {CurrencyData === 'usd' ? `$${product.usd_price}` : `${product.price} VND`}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
