//Packages
import { Link } from 'react-router-dom';

import {useContext} from 'react';
import styles from '../CSS/styles.module.css';
function SingleVendor(props){
    return(

        <div className="col-12 col-md-3 mb-2"  >
            <div className="card">
                <Link to={`/vendor/${props.vendor.user.username}/${props.vendor.id}`}>
                <img src={props.vendor.profile_img} className="card-img-top" width={250} height={250} alt={props.vendor.user.username} />  </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/vendor/${props.vendor.user.username}/${props.vendor.id}`} className={styles['custom-link']}>{props.vendor.user.username}</Link></h5>

                </div>

            </div>
        </div>
    );
}

export default SingleVendor;