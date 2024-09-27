import React, { useEffect, useState } from 'react';
import { GET_ALL } from '../../api/Service';
import startActive from "../../assets/images/icons/stars-active.svg";
import startDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from 'react-router-dom';

const cardTextStyle = {
  maxWidth: "80%",
};

const Item = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const params = {
      pageNumber: 0,
      pageSize: 5,
      sortBy: 'categoryId',
      sortOrder: 'asc'
    };

    GET_ALL('categories', params).then(response => {
      console.log("Categories response", response.content);
      setCategories(response.content);

      // Fetch products for each category
      response.content.forEach(category => {
        const productParams = {
          pageNumber: 0,
          pageSize: 5,
          sortBy: 'productId',
          sortOrder: 'asc'
        };

        GET_ALL(`categories/${category.categoryId}/products`, productParams).then(productResponse => {
          setProductsByCategory(prevState => ({
            ...prevState,
            [category.categoryId]: productResponse.content
          }));
        }).catch(error => {
          console.log('Failed to fetch products:', error);
        });
      });
    }).catch(error => {
      console.log('Failed to fetch categories:', error);
    });
  }, []);

  return (
    <section className="padding-bottom-sm">
      {categories?.length > 0 && categories.map((category) => (
        <div key={category.categoryId}>
          <div className="section-heading heading-line">
            <h4 className="title-section text-uppercase">{category.categoryName}</h4>
          </div>
          <div className="row row-sm">
            {(productsByCategory[category.categoryId] || []).length > 0 &&
              productsByCategory[category.categoryId].map((row, index) => (
                <div className="col-xl-3 col-lg-3 col-md-3 col-6" key={index}>
                  <div className="card card-sm card-product-grid">
                    <Link to={`/Detail?productId=${row.productId}`} className="img-wrap">
                      <img
                        src={`http://localhost:8080/api/public/products/image/${row.image}`}
                        alt={row.productName}
                      />
                    </Link>
                    <figcaption className="info-wrap">
                      <ul className="rating-stars mb-1">
                        <li style={cardTextStyle} className="stars-active">
                          <img src={startActive} alt="" />
                        </li>
                        <li>
                          <img src={startDisable} alt="" />
                        </li>
                      </ul>
                      <div>
                        <Link to={`/Detail?productId=${row.productId}`} className="title text-nowrap text-truncate text-decoration-none"
                          style={{ maxWidth: '200px' }}>
                          {row.productName}
                        </Link>
                        <a className='text-secondary'> {row.category.categoryName}</a>
                      </div>
                      <div className="price h5 mt-2">${row.price}</div>
                    </figcaption>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </section>
  );
};

export default Item;
