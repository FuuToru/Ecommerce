import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { UserContext, CartContext, CurrencyContext } from '../Context';

const baseUrl = 'http://127.0.0.1:8000/api';

function ConfirmOrder() {
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [orderAmount, setOrderAmount] = useState(0);
    const [payMethod, setPayMethod] = useState('');
    const [addressData, setAddressData] = useState([]);

    const userContext = useContext(UserContext);
    const { cartData, setCartData } = useContext(CartContext);
    const { CurrencyData } = useContext(CurrencyContext);

    useEffect(() => {
        fetchData(baseUrl + '/address/');
    }, []);

    useEffect(() => {
        if (!confirmOrder && addressData.length > 0) {
            addOrderInTable();
        }
    }, [addressData, confirmOrder]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setAddressData(data.results));
    }

    if (!userContext) {
        window.location.href = "/customer/login";
        return null; // Prevent further rendering
    }

    function addOrderInTable() {
        const customerId = localStorage.getItem('customer_id');
        let result = 'No address found!';
        if (addressData.length > 0) {
            const address = addressData.find((address) => Number(address.customer) === Number(customerId) && address.default_address);
            if (address) {
                result = address.address;
            }
        }
        
        const previousCart = localStorage.getItem('cartData');
        const cartJson = JSON.parse(previousCart);
        let total_price = 0;
        let total_usd = 0;
        cartJson.forEach((cart) => {
            total_price += parseFloat(cart.product.price) * cart.product.qty;
            total_usd += parseFloat(cart.product.usd_price) * cart.product.qty;
        });

        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('order_status', true);
        formData.append('total_amount', total_price);
        formData.append('total_usd_amount', total_usd);
        formData.append('order_address', result);

        axios.post(baseUrl + '/orders/', formData).then((response) => {
            const newOrderId = response.data.id;
            setOrderId(newOrderId);
            setOrderAmount(CurrencyData === 'usd' ? response.data.total_usd_amount : response.data.total_amount);
            orderItems(newOrderId);
            setConfirmOrder(true);
        }).catch((error) => {
            console.error(error);
        });
    }

    function updateOrderStatus(order_status) {
        axios.post(`${baseUrl}/update-order-status/${orderId}`).then(() => {
            window.location.href = '/order/success';
        }).catch(() => {
            window.location.href = '/order/failure';
        });
    }

    function orderItems(newOrderId) {
        const previousCart = localStorage.getItem('cartData');
        const cartJson = JSON.parse(previousCart);

        if (cartJson) {
            cartJson.forEach((cart, index) => {
                const formData = new FormData();
                formData.append('order', newOrderId);
                formData.append('product', cart.product.id);
                formData.append('qty', cart.product.qty);
                formData.append('price', cart.product.price);
                formData.append('usd_price', cart.product.usd_price);

                axios.post(baseUrl + '/orderitems/', formData).then(() => {
                    cartJson.splice(index, 1);
                    localStorage.setItem('cartData', JSON.stringify(cartJson));
                    setCartData(cartJson);
                }).catch((error) => {
                    console.error(error);
                });
            });
        }
    }

    function changePaymentMethod(method) {
        setPayMethod(method);
    }

    function payNowButton() {
        if (payMethod) {
            changePaymentMethod(payMethod);
        } else {
            alert('Select Payment Method');
        }
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 offset-3'>
                    <div className='card py-3'>
                        <h3 className='text-center'><i className='fa fa-check-circle text-success'></i> Your Order has been confirmed </h3>
                        <p className='text-center'>ORDER ID: {orderId}</p>
                    </div>
                    <div className='card py-3 mt-4'>
                        <form>
                            {CurrencyData === 'usd' &&
                                <div className='form-group'>
                                    <label>
                                        <input type='radio' name='paymethod' onChange={() => changePaymentMethod('paypal')} value='Paypal' /> Paypal
                                    </label>
                                </div>
                            }
                            {CurrencyData !== 'usd' &&
                                <div className='form-group'>
                                    <label>
                                        <input type='radio' name='paymethod' onChange={() => changePaymentMethod('credit')} value='Credit Card' /> Credit Card
                                    </label>
                                </div>
                            }
                            <button type='button' onClick={payNowButton} className='btn btn-sm btn-success mt-3'>Next</button>
                        </form>
                        {payMethod === 'paypal' &&
                            <PayPalScriptProvider options={{ "client-id": "AefouazOUhSIQcaDwt1DtRA4aUlyzJBt_FgKvJxN5EiKVZI9SXPDALUUYx6vgTvV_la7WienpoeU7NIe" }}>
                                <PayPalButtons className="mt-3"
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        currency_code: "USD",
                                                        value: orderAmount,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            updateOrderStatus(true);
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder;
