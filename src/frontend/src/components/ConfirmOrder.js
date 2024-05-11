import { UserContext, CartContext } from '../Context';
import {useContext} from 'react';
import axios from "axios";
import {useState} from 'react';

const baseUrl='http://127.0.0.1:8000/api';

function ConfirmOrder(){
    const [ConfirmOrder, SetConfirmOrder] = useState(false);
    const [orderId, SetorderId] = useState('');
    const [PayMethod, SetPayMethod] = useState('');
    const userContext = useContext(UserContext);
    const {cartData, setCartData}= useContext(CartContext);

    console.log(userContext)
    if(!userContext){
        window.location.href="/customer/login"
    }else{
        if(ConfirmOrder == false)
        {
            addOrderInTable();
        }   

    }

    function addOrderInTable(){
        const customerId = localStorage.getItem('customer_id');
        
        const formData = new FormData();
        formData.append('customer',customerId);
        console.log(formData);

        axios.post(baseUrl+'/orders/',formData).then(function(response){
            var orderId = response.data.id;
            SetorderId(orderId);
            orderItems(orderId);
            SetConfirmOrder(true);
        }).catch(function(error){
            console.log(error);
        });

    }

    function orderItems(orderId){
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        console.log(cartJson);

        if(cartJson!=null){
            cartJson.map((cart,index)=>{
                const formData = new FormData();
                formData.append('order',orderId);
                formData.append('product',cart.product.id);
                formData.append('qty',1);
                formData.append('price', cart.product.price);
        
                axios.post(baseUrl+'/orderitems/',formData).then(function(response){
                    cartJson.splice(index,1);
                    localStorage.setItem('cartData', JSON.stringify(cartJson));
                    setCartData(cartJson);
                }).catch(function(error){
                    console.log(error);
                });
            });
            

        }

    }

    function changePaymentMethod(paymethod){
        SetPayMethod(paymethod);

    }

    function PayNowButton(){
        if(PayMethod!=''){
            changePaymentMethod(PayMethod);
        }else{
            alert('Select Payment Method');
        }

    }

    return(
        <div className='container'>
    <div className='row mt-5'>
        <div className='col-6 offset-3'>
            <div className='card py-3'>
                <h3 className='text-center'><i className='fa fa-check-circle text-success'></i> Your Order has been confirmed </h3>
                <p className='text-center'>ORDER ID: {orderId}</p>
            </div>
            <div className='card py-3 mt-4'>
                <form>
                    <div className='form-group'>
                        <label>
                            <input type='radio' name='paymethod' onChange={()=>changePaymentMethod('paypal')} value='Paypal' /> Paypal
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            <input type='radio' name='paymethod' onChange={()=>changePaymentMethod('credit')} value='Credit Card' /> Credit Card
                        </label>
                    </div>
                    <button type='button' onClick={PayNowButton} className='btn btn-sm btn-success mt-3'>Next</button>
                </form>
            </div>
        </div>
    </div>
</div>

    )

}

export default ConfirmOrder;
