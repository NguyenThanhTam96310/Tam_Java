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
    const numItems = 12;
    const handlePageChange = (page) => {
        navigate(`/ListingGrid?page=${page}&categoryId=${categoryId}`);
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
                        to={`? page = ${i}& categoryId=${categoryId}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </Link >
                </li >
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
                                    <li className="breadcrumb-item"><Link to={"/"}>Trang chủ</Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"}>{categories?.categoryName}</Link></li>
                                    {/* <li className="breadcrumb-item"><a href="#">Sub category</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Items</li> */}
                                </ol>
                            </nav>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">Lọc theo</div>
                            <div className="col-md-10">
                                <ul className="list-inline">
                                    <li className="list-inline-item mr-3 dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
                                        <div className="dropdown-menu p-3" style={{ maxWidth: "400px" }}>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> Good supplier
                                            </label>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> Best supplier
                                            </label>
                                            <label className="form-check">
                                                <input type="radio" name="myfilter" className="form-check-input" /> New supplier
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3 dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
                                        <div className="dropdown-menu p-3">
                                            <label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China    </label>
                                            <label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan      </label>
                                            <label className="form-check">    <input type="checkbox" className="form-check-input" /> Uzbekistan  </label>
                                            <label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia     </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3 dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Feature</a>
                                        <div className="dropdown-menu">
                                            <a href="" className="dropdown-item">Anti backterial</a>
                                            <a href="" className="dropdown-item">With buttons</a>
                                            <a href="" className="dropdown-item">Extra safety</a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3"><a href="#">Color</a></li>
                                    <li className="list-inline-item mr-3"><a href="#">Size</a></li>
                                    <li className="list-inline-item mr-3">
                                        <div className="form-inline">
                                            <label className="mr-2">Price</label>
                                            <input className="form-control form-control-sm" placeholder="Min" type="number" />
                                            <span className="px-2"> - </span>
                                            <input className="form-control form-control-sm" placeholder="Max" type="number" />
                                            <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <label className="custom-control mt-1 custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <div className="custom-control-label">Ready to ship
                                            </div>
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
                                <i className="fa fa-bars"></i></a>
                            <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
                                <i className="fa fa-th"></i></a>
                        </div>
                    </div>
                </header>

                <div className="row">
                    {!loading && products.length > 0 && products.map((row) => {
                        return (
                            <div className="col-md-3" key={row.productId}>
                                <figure className="card card-product-grid">
                                    <div className="img-wrap">
                                        <span className="badge badge-danger"> MỚI </span>
                                        <Link to={`/Detail?productId=${row.productId}`} className="img-wrap">
                                            <img
                                                src={`http://localhost:8080/api/public/products/image/${row.image}`}
                                                alt={row.productName}
                                            />
                                        </Link>
                                    </div>
                                    <figcaption className="info-wrap">
                                        <Link to={`/Detail?productId=${row.productId}`} className="title mb-2">{row.productName}</Link>
                                        <div className="price-wrap">
                                            <span className="price">${row.specialPrice}-${row.price}</span>
                                            <small className="text-muted">/per</small>
                                        </div>
                                        <p className="mb-2"> {row.quantity} Pieces  <small className="text-muted">(Sản phẩm tối thiếu)</small></p>

                                        <p className="text-muted ">{row.category.categoryName}</p>

                                        <hr />

                                        <p className="mb-3">
                                            <span className="tag"> <i className="fa fa-check"></i> Đã xác minh</span>
                                            <span className="tag"> 2 Years </span>
                                            <span className="tag"> 23 reviews </span>
                                            <span className="tag"> Japan </span>
                                        </p>

                                        <label className="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <div className="custom-control-label">Thêm vào so sánh
                                            </div>
                                        </label>

                                        <a href="#" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>

                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })}
                    {loading && <div class="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                </div>
                {/* <!-- row end.// --> */}


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
                    <a href="" className="btn btn-light">Có</a>
                    <a href="" className="btn btn-light" style={{ marginLeft: "10px" }}>Không</a>
                </div>

            </div>
            {/* <!-- container .//  --> */}
        </section>
    )
}

export default ListingGrid