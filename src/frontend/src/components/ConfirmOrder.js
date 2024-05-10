import {useContext} from 'react';
import { UserContext } from '../Context';
function ConfirmOrder(){
    const userContext = useContext(UserContext);
    if (userContext.user == null){
        window.location.href = '/customer/login';
    }
    return (
        <h1 className='text-center'>Confirm Order Page</h1>
    );
}

export default ConfirmOrder;
