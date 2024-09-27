import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_ID } from '../../api/Service';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('productId');

    useEffect(() => {
        setLoading(true);
        if (productId) {
            GET_ID('products', productId)
                .then((item) => {
                    setProduct(item);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Failed to fetch product:', error);
                    setLoading(false);
                });
        }
    }, [productId]);

    if (loading) {
        return <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;
    }

    if (!product) {
        return <div className="text-center">Product not found</div>;
    }

    return (
        <section className='section-content bg-white padding-y'>
            <div className='container'>
                {/* Chi tiết sản phẩm */}
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
                                <span className='text-muted '> USD {product.price} đã bao gồm VAT</span>
                            </div>
                            <p>{product.description}</p>
                            <dl className='row'>
                                <dt className='col-sm-3'>Nhà sản xuất</dt>
                                <dd className='col-sm-9 '><a className='text-decoration-none text-black' href="#">Great textile Ltd.</a></dd>
                                <dt className='col-sm-3'>Số bài viết</dt>
                                <dd className='col-sm-9'>596 065</dd>
                                <dt className='col-sm-3'>Bảo hành</dt>
                                <dd className='col-sm-9'>2 năm</dd>
                                <dt className='col-sm-3'>Thời gian giao hàng</dt>
                                <dd className='col-sm-9'>3-4 ngày</dd>
                                <dt className='col-sm-3'>Tình trạng</dt>
                                <dd className='col-sm-9'>Còn hàng</dd>
                            </dl>
                            <div className='form-row mt-4 d-flex align-items-center'>
                                <div className="form-group mb-0 flex-grow-0 d-flex align-items-center">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-light" type="button" id="button-plus"> - </button>
                                        </div>
                                        <input type="text" className="form-control" value="1" />

                                        <div className="input-group-append">
                                            <button className="btn btn-light" type="button" id="button-minus"> + </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group mb-0  pt-3'>
                                    <a href='#' className='btn btn-outline-warning'>
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

                {/* Các phần bổ sung */}
                <section className='section-name padding-y bg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5 className='title-description'>Mô tả</h5>
                                <p>{product.description}</p>
                                {/* Thêm chi tiết nếu cần */}
                            </div>
                            <aside className='col-md-4'>
                                <div className='box'>
                                    <h5 className='title-description'>Tệp tin</h5>
                                    <p>Các tệp tin và thông tin bổ sung về sản phẩm.</p>
                                    {/* Thêm liên kết tệp nếu cần */}
                                    <h5 className='title-description'>Video</h5>
                                    {/* Thêm video hoặc phương tiện khác */}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Phần Đăng ký nhận tin */}
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
