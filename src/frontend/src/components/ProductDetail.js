import logo from '../logo.svg';
import bg from '../bg-1.avif';
import { Link } from 'react-router-dom';
import SingleTagProduct from './SingleTagProduct';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { UserContext, CartContext, CurrencyContext } from '../Context';
import axios from "axios";
import styles from './CSS/styles.module.css'; // assuming you're using CSS modules

function ProductDetail() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productData, setproductData] = useState([]);
    const [productImgs, setproductImgs] = useState([]);
    const [productTags, setproductTags] = useState([]);
    const [relatedProducts, setrelatedProducts] = useState([]);
    const { product_slug, product_id } = useParams();
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
    const [ProductInWishlist, setProductInWishlist] = useState(false);
    const { cartData, setCartData } = useContext(CartContext);
    const { CurrencyData, setCurrencyData } = useContext(CurrencyContext);
    const userContext = useContext(UserContext);
    const [vendorData, setVendorData] = useState([]);
    const [vendorProfile, setVendorProfile] = useState([]);  // State for vendor data
    const [productRating, setProductRating] = useState([]);  // State for product rating
    const [customerRating, setCustomerRating] = useState([]);  // State for customer rating
    const [customerProfile, setCustomerProfile] = useState([]);  // State for customer profile

    useEffect(() => {
        fetchData(baseUrl + '/product/' + product_id + '/');
        fetchRelatedData(baseUrl + '/related-products/' + product_id);
        checkProductIncart(product_id);
        checkProductWishList(baseUrl + '/check-in-wishlist/', product_id);
    }, []);

    function checkProductIncart(product_id) {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        if (cartJson != null) {
            cartJson.map((cart) => {
                if (cart != null && cart.product.id == product_id) {
                    setcartButtonClickStatus(true);
                }
            });
        }
    }

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setproductData(data);
                setproductImgs(data.product_imgs);
                setproductTags(data.tag_list);
                fetchVendorData(data.vendor);  // Fetch vendor data
                fetchProductRating(data.id);
            });
    }

    function fetchProductRating(product_id) {
        fetch(baseUrl + '/productrating/')
            .then((response) => response.json())
            .then((data) => {
                setProductRating(data.results);
                

            });
    }
    console.log(productRating);




    const fetchCustomerRating = (customerId) => {
        fetch(baseUrl + '/customer/'+ customerId + '/')
        .then((response) => response.json())
        .then((data) => {
            setCustomerRating(data);
            setCustomerProfile(data.user);
        });
    };

    // Effect hook để gọi hàm fetchCustomerRating khi component được render
    useEffect(() => {
        productRating.forEach((rating) => {
            if (rating.product === productData.id) {
                fetchCustomerRating(rating.customer);
            }
        });
    }, [productRating]);

    console.log(customerRating);

    function fetchVendorData(vendorId) {
        fetch(baseUrl + '/vendor/' + vendorId + '/')
            .then((response) => response.json())
            .then((data) => {
                setVendorData(data);
                setVendorProfile(data.user);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    function fetchRelatedData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setrelatedProducts(data.results);
            });
    }

    function changerelatedUrl(baseurl) {
        fetchRelatedData(baseurl);
    }

    const tagsLinks = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim();
        tagsLinks.push(<Link className='badge bg-secondary text-white me-1' to={`/products/${tag}`}>{tag}</Link>)
    }

    const cartAddButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);

        var cartData = {
            'product': {
                'id': productData.id,
                'price': productData.price,
                'usd_price': productData.usd_price,
                'title': productData.title,
                'image': productData.image,
                'qty': productData.qty
            },
            'vendor': {
                'id': productData.vendor,
            }
        }
        if (cartJson != null) {
            cartJson.push(cartData);
            var cartString = JSON.stringify(cartJson);
            localStorage.setItem('cartData', cartString);
            setCartData(cartJson);
        } else {
            var newCartList = [];
            newCartList.push(cartData);
            var cartString = JSON.stringify(newCartList);
            localStorage.setItem('cartData', cartString);
        }

        setcartButtonClickStatus(true);
    }

    const cartRemoveButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == productData.id) {
                cartJson.splice(index, 1);
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setcartButtonClickStatus(false);
        setCartData(cartJson);
    }

    const updateQuantity = (product_id, quantity) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == product_id) {
                cart.product.qty += quantity;
                if (cart.product.qty < 1) cart.product.qty = 1; // Minimum quantity is 1
            }
        });
        var cardString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cardString);
        setCartData(cartJson);
    };

    function saveInWishList() {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('product', productData.id);
        axios.post(baseUrl + '/wishlist/', formData).then(function (response) {
            if (response.data.id) {
                setProductInWishlist(true);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    function checkProductWishList(baseurl, product_id) {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('product', product_id);
        axios.post(baseurl, formData).then(function (response) {
            if (response.data.bool == true) {
                setProductInWishlist(true);
            } else {
                setProductInWishlist(false);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    function renderStars(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className={`fa-solid fa-star ${i < rating ? 'text-warning' : ''}`}></i>
            );
        }
        return stars;
    }


    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {productImgs.map((img, index) => {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#productThumbnailSlider"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}
                                        aria-current={index === 0 ? 'true' : 'false'}
                                        aria-label={`Slide ${index + 1}`}
                                    ></button>
                                );
                            })}
                        </div>
                        <div className="carousel-inner">
                            {productImgs.map((img, index) => {
                                return (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={img.image} className='img-thumbnail mb-5' width={250} height={250} alt={index}></img>
                                    </div>
                                );
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-8">
                    <h3>{productData.title}</h3>
                    <p>{productData.detail}</p>
                    {CurrencyData !== 'usd' && <h5 className="card-title text-danger">Price:  {productData.price} VND</h5>}
                    {CurrencyData === 'usd' && <h5 className="card-title text-danger">Price: ${productData.usd_price}</h5>}
                    


                    <div className="d-flex align-items-center my-2">
                        <button onClick={() => updateQuantity(productData.id, -1)} className='btn btn-sm btn-secondary'>-</button>
                        <span className='mx-2'>
                            {cartData && cartData.length > 0 ? 
                                cartData.map((cart) => {
                                    if (cart.product.id === productData.id) {
                                        return cart.product.qty;
                                    }
                                    return null;
                                }).filter(qty => qty !== null)[0] ?? 1 
                                : 1}
                        </span>
                        <button onClick={() => updateQuantity(productData.id, 1)} className='btn btn-sm btn-secondary'>+</button>                        
                    </div>
                    <p className='mt-3'>
                        {!cartButtonClickStatus &&
                            <button title="Add to Cart" type="button" onClick={cartAddButtonHandler} className='btn btn-primary btn-sm'><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        }
                        {cartButtonClickStatus &&
                            <button title="Remove from Cart" type="button" onClick={cartRemoveButtonHandler} className='btn btn-warning btn-sm'><i className="fa-solid fa-cart-plus"></i> Remove from Cart</button>
                        }
                        {userContext && !ProductInWishlist &&
                            <button onClick={saveInWishList} title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i> Wishlist</button>
                        }
                        {userContext == null &&
                            <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1 disabled'><i className="fa fa-heart"></i> Wishlist</button>
                        }
                        {userContext && ProductInWishlist &&
                            <button onClick={saveInWishList} title="Add to Wishlist" className='btn btn-danger btn-sm ms-1 disabled'><i className="fa fa-heart"></i> Wishlist</button>
                        }
                    </p>
                    <div className='producttags mt-4'>
                        <h5>Tags</h5>
                        <p>
                            {tagsLinks}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="mt-5 col-4">
                    {vendorData.profile_img &&
                        <>
                            <div className={styles["avatar-wrapper"]}>
                                <img src={vendorData.profile_img} alt="Vendor Avatar" className={styles['avatar-img']} />
                            </div>
                            <h6 className={styles['vendor-info']}>Vendor: {vendorProfile.username}</h6>
                        </>
                    }
                </div>
                <div className='col-8'>
                    <h5 className='mt-3 mb-3'>Vendor Description</h5>
                    <p className={styles['vendor-description']}>{vendorData.description}</p>
                </div>
            </div>
            <h5 className='mt-5 mb-3 text-center'>Review Products</h5>
            <span className='mx-2'>
                {productRating && productRating.length > 0 ? 
                    productRating.map((rating) => {
                        // const customer = customerRating[rating.customer];
                        if (rating.product === productData.id) {
                            return (
                                <div key={rating.id} className={styles["review-wrapper"]}>
                                    <div className={styles["review-avatar"]}>
                                        <img src={customerRating.profile_img} alt="Customer Avatar" className={styles['avatar-img']} />
                                    </div>
                                    <div className={styles["review-content"]}>
                                        <h6>{customerProfile.username}</h6>
                                        <p>Rating: {renderStars(rating.rating)}</p>
                                        <p>Review: {rating.reviews}</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                : "No ratings available for this product."}
            </span>



            <h5 className='mt-5 mb-3 text-center'>Related Products</h5>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    {relatedProducts.map((product, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#relatedProductsSlider"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        );
                    })}
                </div>
                <div className="carousel-inner">
                    {relatedProducts && relatedProducts.map((product, index) => {
                        return (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} onClick={() => {
                                window.location.href = `/product/${product.title}/${product.id}`;
                            }}>
                                <SingleTagProduct product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
