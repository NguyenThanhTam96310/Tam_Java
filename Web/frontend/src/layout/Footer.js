import React from 'react'

const Footer = () => {
  return (
    <footer className="section-footer bg-secondary text-white">
      <div className="container">
        <section className="footer-top padding-y-lg">
          <div className="row">
            <aside className="col-md-4 col-12">
              <article className="mr-md-4">
                <h5 className="title">Liên hệ với chúng tôi</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>
                <ul className="list-icon">
                  <li> <i className="icon fa fa-map-marker"></i> 542 Đường Giả, Thành phố 10021 Hà Lan</li>
                  <li> <i className="icon fa fa-envelope"></i> info@example.com</li>
                  <li> <i className="icon fa fa-phone"></i> (800) 060-0730, (800) 060-0730</li>
                  <li> <i className="icon fa fa-clock"></i> Thứ 2 - Thứ 7 10:00 - 19:00</li>
                </ul>
              </article>
            </aside>
            <aside className="col-md col-6">
              <h5 className="title">Thông tin</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Về chúng tôi</a></li>
                <li><a href="#" className="text-decoration-none">Nghề nghiệp</a></li>
                <li><a href="#" className="text-decoration-none">Tìm cửa hàng</a></li>
                <li><a href="#" className="text-decoration-none">Điều khoản và quy định</a></li>
                <li><a href="#" className="text-decoration-none">Sơ đồ trang</a></li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h5 className="title">Tài khoản của tôi</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Liên hệ</a></li>
                <li><a href="#" className="text-decoration-none">Hoàn tiền</a></li>
                <li><a href="#" className="text-decoration-none">Tình trạng đơn hàng</a></li>
                <li><a href="#" className="text-decoration-none">Thông tin vận chuyển</a></li>
                <li><a href="#" className="text-decoration-none">Mở tranh chấp</a></li>
              </ul>
            </aside>

            <aside className="col-md-4 col-12">
              <h5 className="title">Bản tin</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>

              <form className="form-inline mb-3">
                <input type="text" placeholder="Email" className="border-0 w-auto form-control" name="" />
                <button className="btn ml-2 btn-warning"> Đăng ký</button>
              </form>

              <p className="text-white-50 mb-2">Theo dõi chúng tôi trên mạng xã hội</p>
              <div>
                <a href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-instagram"></i></a>
                <a href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-youtube"></i></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="footer-bottom text-center">
          <p className="text-white">Chính sách Bảo mật - Điều khoản Sử dụng - Hướng dẫn Thông tin Người dùng</p>
          <p className="text-muted"> &copy 2019 Tên Công ty, Bảo lưu mọi quyền </p>
          <br />
        </section>
      </div>
    </footer>

  )
}

export default Footer