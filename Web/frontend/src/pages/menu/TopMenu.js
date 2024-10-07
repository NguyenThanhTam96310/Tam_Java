import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GET_ALL } from "../../api/Service";
const TopMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const params = {
            pageNumber: 0,
            pageSize: 5,
            sortBy: 'categoryId',
            sortOrder: 'asc',
        };

        GET_ALL('categories', params)
            .then(response => {
                setCategories(response.content);
            })
            .catch(error => {
                console.error('Failed to fetch categories:', error);
            });
    }, []);

    return (
        <>
            <header className="section-header">
                <div className="container">
                    <nav className="navbar navbar-main navbar-expand pl-0">
                        <ul className="navbar-nav flex-wrap">
                            <li className="nav-item">
                                <Link to={"/shop"} className="nav-link text-decoration-none">Cửa hàng của tôi</Link>
                            </li>
                            {categories.map((cat, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link text-decoration-none" to={`/ListingGrid?categoryId=${cat.categoryId}`} >
                                        {cat.categoryName}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to={'/ListingGrid'} className="nav-link text-decoration-none">Tất cả sản phẩm</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default TopMenu;
