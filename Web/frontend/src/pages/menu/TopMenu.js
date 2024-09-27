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
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle border-0 bg-transparent text-decoration-none" style={{ outline: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danh mục
                                </button>
                                <ul className="dropdown-menu">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <Link to={`/ListingGrid?categoryId=${cat.categoryId}`} className='dropdown-item text-decoration-none'>
                                                {cat.categoryName}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link to={'/ListingGrid'} className='dropdown-item text-decoration-none'>Tất cả sản phẩm</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/electronic"}>Điện tử</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/fashion"}>Thời trang</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/beauty"}>Làm đẹp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/motors"}>Xe cộ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/sport"}>Thể thao</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/gardening"}>Làm vườn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/deal"}>Khuyến mãi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-decoration-none" to={"/under"}>Dưới $10</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default TopMenu;
