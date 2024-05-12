import { UserContext, CartContext, CurrencyContext } from '../Context';
import {useContext} from 'react';
import axios from "axios";
import {useState} from 'react';
import{PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';

const baseUrl='http://127.0.0.1:8000/api';

function ConfirmOrder(){
    const [ConfirmOrder, SetConfirmOrder] = useState(false);
    const [orderId, SetorderId] = useState('');
    const [orderAmount, setorderAmount] = useState(0);

    const [OrderStatus, SetOrderStatus] = useState(false);
    const [PayMethod, SetPayMethod] = useState('');
    const userContext = useContext(UserContext);
    const {cartData, setCartData}= useContext(CartContext);
    const {CurrencyData, setCurrencyData} = useContext(CurrencyContext);

    // console.log(userContext)
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

        var total_amount = 0;
        var total_usd_amount = 0;
        var previousCart= localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index)=>{
            total_amount +=parseFloat(cart.product.price)
            total_usd_amount +=parseFloat(cart.product.usd_price)

        })
        
        const formData = new FormData();
        formData.append('customer',customerId);
        formData.append('order_status', true);
        formData.append('total_amount',total_amount);
        formData.append('total_usd_amount',total_usd_amount);
        console.log(formData);

        axios.post(baseUrl+'/orders/',formData).then(function(response){
            var orderId = response.data.id;
            SetorderId(orderId);
            if(CurrencyData == 'usd'){
                setorderAmount(response.data.total_usd_amount);

            }else{
                setorderAmount(response.data.total_amount);


            }
            orderItems(orderId);
            SetConfirmOrder(true);
        }).catch(function(error){
            console.log(error);
        });

    }

    function updateOrderStatus(order_status){
        axios.post(baseUrl+'/update-order-status/'+orderId).then(function(response){
            window.location.href='/order/success';
        }).catch(function(error){
            window.location.href='/order/failure';
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
                formData.append('usd_price', cart.product.usd_price);

        
                axios.post(baseUrl+'/orderitems/',formData).then(function(response){
                    cartJson.splice(index);
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
                    {
                        CurrencyData == 'usd' && 
                        <div className='form-group'>
                        <label>
                            <input type='radio' name='paymethod' onChange={()=>changePaymentMethod('paypal')} value='Paypal' /> Paypal
                        </label>
                    </div>
                    }
                    {
                        CurrencyData !='usd' && 
                        <div className='form-group'>
                        <label>
                            <input type='radio' name='paymethod' onChange={()=>changePaymentMethod('credit')} value='Credit Card' /> Credit Card
                        </label>
                    </div>
                    }


                    <button type='button' onClick={PayNowButton} className='btn btn-sm btn-success mt-3'>Next</button>
                </form>
                {PayMethod == 'paypal' &&
                <PayPalScriptProvider options={{"client-id":"AefouazOUhSIQcaDwt1DtRA4aUlyzJBt_FgKvJxN5EiKVZI9SXPDALUUYx6vgTvV_la7WienpoeU7NIe"}}>
                <PayPalButtons className="mt-3">
                createOrder = {(data,actions)=>{
                    return actions.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    currency_code:"USD",
                                    value:{orderAmount},
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data,actions)=>{
                    return actions.order.capture().then((details)=>{
                        const name = details.payer.name.given_name;
                        // alert(`Transaction completed by ${name}`);
                        // SetOrderStatus(true);
                        updateOrderStatus(true);
                        
                    });
                }}
                </PayPalButtons>
                </PayPalScriptProvider>

                }
            </div>
        </div>
    </div>
</div>

    )

}

export default ConfirmOrder;