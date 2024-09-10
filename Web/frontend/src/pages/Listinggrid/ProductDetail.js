import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { GET_ID } from "../../api/Service";


const ProductDetail = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");
    useEffect(() => {
        setLoading(true);
        if (productId) {
            GET_ID("products", productId)
                .then((item) => setProduct(item))
                .catch((error) => {
                    console.error("Failed to fetch product:", error);
                });
        }
    }, [productId]);
    return (
        <section className='product-detail'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <figure className='p-3'>
                            <img
                                src={`http://localhost:8080/api/public/products/image/${product?.image}`}
                                alt={product?.productName}
                                className='w-100'
                            />
                        </figure>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='py-3'>
                            <h1>
                                {product?.productName}
                            </h1>
                            <div className="price-wrap">
                                <span><strong>Price: </strong></span>
                                <span className="price">{`${product?.specialPrice}-${product?.price}`}</span>
                                <small className="text-muted">/per</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 border-top py-3'>
                        <h3>Description</h3>
                        <div className='p-3'>
                            {product?.description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail