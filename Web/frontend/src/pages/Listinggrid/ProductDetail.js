import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { GET_ID, POST_ADD } from '../../api/Service';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1); // State for quantity
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('productId');
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        if (productId) {
            GET_ID('products', productId)
                .then((item) => {
                    setProduct(item);
                    console.log("====product", item)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Failed to fetch product:', error);
                    setLoading(false);
                });
        }
    }, [productId]);

    const handleAddCart = (CartId, productId) => {
        const url = `/carts/${CartId}/products/${productId}/quantity/${quantity}`; // Use quantity state

        POST_ADD(url)
            .then(response => {
                toast.success("Thêm vào giỏ hàng thành công", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                const currentLength = parseInt(localStorage.getItem('CartLength'));
                localStorage.setItem('CartLength', currentLength + 1);
                navigate(`/Detail?productId=${productId}`);

            })
            .catch(error => {
                console.error('Add to cart error:', error);
                toast.error("Thêm vào giỏ hàng thất bại", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
            });
    };


    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Prevent going below 1
    };

    if (loading) {
        return <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;
    }

    if (!product) {
        return <div className="text-center">Product not found</div>;
    }

    return (
        <section className='section-content bg-white padding-y'>
            <div className='container'>
                <div className='row'>
                    <aside className='col-md-6'>
                        <div className='card'>
                            <article className='gallery-wrap'>
                                <div className='img-big-wrap'>
                                    <div>
                                        <a>
                                            <img
                                                src={`http://localhost:8080/api/public/products/image/${product.image}`}
                                                alt={product.productName}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className='thumbs-wrap'>
                                    <a href="#" className='item-thumb'><img src={`http://localhost:8080/api/public/products/image/${product.image}`} alt={product.productName} /></a>
                                    <a href="#" className='item-thumb'><img src={`http://localhost:8080/api/public/products/image/${product.image}`} alt={product.productName} /></a>
                                    <a href="#" className='item-thumb'><img src={`http://localhost:8080/api/public/products/image/${product.image}`} alt={product.productName} /></a>
                                    <a href="#" className='item-thumb'><img src={`http://localhost:8080/api/public/products/image/${product.image}`} alt={product.productName} /></a>
                                    <a href="#" className='item-thumb'><img src={`http://localhost:8080/api/public/products/image/${product.image}`} alt={product.productName} /></a>
                                </div>
                            </article>
                        </div>
                    </aside>
                    <main className='col-md-6'>
                        <article className='product-info-aside'>
                            <h2 className='title mt-3'>{product.productName}</h2>
                            <div className='rating-wrap my-3'>
                                <ul className='rating-stars'>
                                    <li style={{ width: '80%' }} className='stars-active'>
                                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </li>
                                </ul>
                                <small className='label-rating text-muted'>132 đánh giá</small>
                                <small className='label-rating text-success'><i className='fa fa-clipboard-check'></i> 154 đơn hàng</small>
                            </div>
                            <div className='mb-3'>
                                <var className='price h4'>USD {product.specialPrice}</var>
                                <span className='text-muted'> USD {product.price} đã bao gồm VAT</span>
                            </div>
                            <p>{product.description}</p>
                            <div className='form-row mt-4 d-flex align-items-center'>
                                <div className="form-group mb-0 flex-grow-0 d-flex align-items-center">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-light" type="button" onClick={decreaseQuantity}> - </button>
                                        </div>
                                        <input type="text" className="form-control" value={quantity} readOnly />
                                        <div className="input-group-append">
                                            <button className="btn btn-light" type="button" onClick={increaseQuantity}> + </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group mb-0 pt-3'>
                                    <a className='btn btn-outline-warning' onClick={() => handleAddCart(localStorage.getItem("CartId"), product.productId)}>
                                        <i className='fas fa-shopping-cart'></i> <span className='text'>Thêm vào giỏ hàng</span>
                                    </a>
                                    <a href='#' className='btn btn-light ml-2'>
                                        <i className='fas fa-envelope'></i> <span className='text'>Liên hệ nhà cung cấp</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>

                {/* Other sections... */}
                <section className='section-name padding-y bg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5 className='title-description'>Mô tả</h5>
                                <p>{product.description}</p>
                            </div>
                            <aside className='col-md-4'>
                                <div className='box'>
                                    <h5 className='title-description'>Tệp tin</h5>
                                    <p>Các tệp tin và thông tin bổ sung về sản phẩm.</p>
                                    <h5 className='title-description'>Video</h5>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className='padding-y-lg bg-light border-top'>
                    <div className='container'>
                        <p className='pb-2 text-center'>Cung cấp các xu hướng sản phẩm mới nhất và tin tức ngành công nghiệp trực tiếp đến hộp thư của bạn</p>
                        <div className='row justify-content-md-center'>
                            <div className='col-lg-4 col-sm-6'>
                                <form className='form-row'>
                                    <div className='col-8'>
                                        <input className='form-control' placeholder='Email của bạn' type='email' />
                                    </div>
                                    <div className='col-4'>
                                        <button type='submit' className='btn btn-block btn-warning'>
                                            <i className='fa fa-envelope'></i> Đăng ký
                                        </button>
                                    </div>
                                </form>
                                <small className='form-text'>Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ ba.</small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ProductDetail;
