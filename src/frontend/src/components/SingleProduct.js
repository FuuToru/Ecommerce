//Packages
import { Link } from 'react-router-dom';
//Assets
import logo from '../logo.svg';
import ProductDetail from './ProductDetail';
import {CurrencyContext } from '../Context';
import {useContext} from 'react';
function SingleProduct(props){
    const {CurrencyData, setCurrencyData} = useContext(CurrencyContext);
    return(
        <>
        {/* product box */}
        <div className="col-12 col-md-3 mb-2"  >
            <div className="card">
                <Link to={`/product/${props.product.title}/${props.product.id}`}>
                <img src={props.product.image} className="card-img-top" width={250} height={250} alt="..." />  </Link>
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h4>
                    {
                        CurrencyData!='usd' &&                    <h5 className="card-title">Price:  {props.product.price} VND</h5>
                    }
                    {
                        CurrencyData =='usd' &&                    
                        <h5 className="card-title">Price: ${props.product.usd_price}</h5>
                    }

                </div>
                <div className='card-footer'>
                    <button title = "Add to Cart" className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title = "Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
                </div>

            </div>
        </div>
        {/* product box end */}
        </>

    );
}

export default SingleProduct;