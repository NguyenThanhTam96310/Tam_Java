import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_ALL, GET_ID } from "../../api/Service";


const ListingGrid = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    const categoryId = queryParams.get("categoryId");
    const productId = queryParams.get("productId");
    const numItems = 8;
    const handlePageChange = (page) => {
        navigate(`/ListingGrid?page=${page}`);
    };
    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                    <Link
                        className="page-link"
                        to={`?page=${i}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </Link>
                </li>
            );
        }
        return pageNumbers;
    };

    useEffect(() => {
        setLoading(true);
        const params = {
            pageNumber: currentPage,
            pageSize: numItems,
            sortBy: "productId",
            sortOrder: "asc",
        };
        if (categoryId !== null) {
            GET_ALL(`categories/${categoryId}/products`, params)
                .then((response) => {
                    setProducts(response.content);
                    setTotalPages(response.totalPages);
                    setTotalElements(response.totalElements);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch products:", error);
                    setLoading(false);
                });
            GET_ID("categories", categoryId)
                .then((item) => setCategories(item))
                .catch((error) => {
                    console.error("Failed to fetch category:", error);
                });
        } else {
            GET_ALL("products", params)
                .then((response) => {
                    setProducts(response.content);
                    setTotalPages(response.totalPages);
                    setTotalElements(response.totalElements);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch products:", error);
                    setLoading(false);
                });
            setCategories({ categoryName: "Tất cả sản phẩm" });
        }
    }, [categoryId, currentPage]);

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2"> Bạn đang ở đây: </div>
                            <nav className="col-md-8">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/" style={{ textDecoration: 'none', color: "black" }}>Trang chủ</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="#" style={{ textDecoration: 'none', color: "black" }}>{categories?.categoryName}</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">Lọc theo</div>
                            <div className="col-md-10">
                                <ul className="list-inline">
                                    <li className="list-inline-item mr-3 dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nhà cung cấp
                                        </a>
                                        <div className="dropdown-menu p-3" style={{ maxWidth: "400px" }}>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp tốt
                                            </label>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp tốt nhất
                                            </label>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> Nhà cung cấp mới
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3 dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Quốc gia
                                        </a>
                                        <div className="dropdown-menu p-3">
                                            <label className="form-check">
                                                <input type="checkbox" className="form-check-input" /> Việt Nam
                                            </label>
                                            <label className="form-check">
                                                <input type="checkbox" className="form-check-input" /> Nhật Bản
                                            </label>
                                            <label className="form-check">
                                                <input type="checkbox" className="form-check-input" /> Mỹ
                                            </label>
                                            <label className="form-check">
                                                <input type="checkbox" className="form-check-input" /> Nga
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3 dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Tính năng
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Kháng khuẩn</a>
                                            <a href="#" className="dropdown-item">Có nút</a>
                                            <a href="#" className="dropdown-item">An toàn hơn</a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Màu</a>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Size</a>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <div className="form-inline">
                                            <label className="mr-2">Giá</label>
                                            <input className="form-control form-control-sm" placeholder="Min" type="number" />
                                            <span className="px-2"> - </span>
                                            <input className="form-control form-control-sm" placeholder="Max" type="number" />
                                            <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <label className="custom-control mt-1 custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <div className="custom-control-label">Sẵn sàng để vận chuyển</div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <header className="mb-3">
                    <div className="form-inline">
                        <strong className="mr-md-auto">Kết quả tìm kiếm: </strong>
                        <select className="mr-2 form-control">
                            <option>Sản phẩm mới nhất</option>
                            <option>Đang thịnh hành</option>
                            <option>Phổ biến nhất</option>
                            <option>Rẻ nhất</option>
                        </select>
                        <div className="btn-group">
                            <a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view">
                                <i className="fa fa-bars"></i>
                            </a>
                            <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
                                <i className="fa fa-th"></i>
                            </a>
                        </div>
                    </div>
                </header>

                <div className="row">
                    {!loading && products.length > 0 && products.map((row) => (
                        <div className="col-md-3" key={row.productId}>
                            <figure className="card card-product-grid p-2">
                                <div className="img-wrap m-2">
                                    <span className="badge badge-danger"> MỚI </span>
                                    <Link to={`/Detail?productId=${row.productId}`} className="img-wrap">
                                        <img
                                            src={`http://localhost:8080/api/public/products/image/${row.image}`}
                                            alt={row.productName}
                                        />
                                    </Link>
                                </div>
                                <figcaption className="info-wrap">
                                    <Link to={`/Detail?productId=${row.productId}`} className="title text-nowrap text-truncate text-decoration-none"
                                        style={{ maxWidth: '200px' }}>{row.productName}</Link>
                                    <div className="price-wrap">
                                        <span className="price">${row.specialPrice}-${row.price}</span>
                                        <small className="text-muted"> /per</small>
                                    </div>
                                    <p className="mb-2"> {row.quantity} Pieces <small className="text-muted">(Sản phẩm tối thiếu)</small></p>
                                    <p className="text-muted ">{row.category.categoryName}</p>
                                    <hr />
                                    <p className="mb-3">
                                        <span className="tag"><i className="fa fa-check"></i> Đã xác minh</span>
                                        <span className="tag"> 2 năm </span>
                                        <span className="tag"> 23 đánh giá </span>
                                        <span className="tag"> Japan </span>
                                    </p>
                                    <label className="custom-control mb-3 custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" />
                                        <div className="custom-control-label">Thêm vào so sánh</div>
                                    </label>
                                    <a
                                        href="#"
                                        className="btn"
                                        style={{
                                            backgroundColor: "#ff6a00",
                                            color: "white",
                                        }}
                                    >
                                        <i className="fa fa-envelope"></i> Liên hệ nhà cung cấp
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                    {loading &&
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                </div>

                <nav className="mb-4" aria-label="Page navigation sample">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={handlePrevious} disabled={currentPage === 1}>Trang trước</button>
                        </li>
                        {renderPageNumbers()}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <button className="page-link" onClick={handleNext} disabled={currentPage === totalPages}>Trang sau</button>
                        </li>
                    </ul>
                </nav>

                <div className="box text-center">
                    <p>Bạn đã tìm thấy điều bạn đang tìm kiếm chứ？</p>
                    <a href="#" className="btn btn-light">Có</a>
                    <a href="#" className="btn btn-light" style={{ marginLeft: "10px" }}>Không</a>
                </div>
            </div>
            {/* <!-- container .//  --> */}
        </section>
    )
}

export default ListingGrid