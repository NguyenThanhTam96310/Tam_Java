import React from 'react'

const Services = () => {
  return (
    <section className="padding-bottom">

      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Dịch vụ thương mại</h4>
      </header>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <article className="card card-post">
            <img src={require("../../assets/images/posts/1.jpg")} className="card-img-top" />
            <div className="card-body">
              <h6 className="title">Đảm bảo thương mại</h6>
              <p className="small text-uppercase text-muted">Bảo vệ đơn hàng</p>
            </div>
          </article>
          {/* <!-- card.// --> */}
        </div>
        {/* <!-- col.// --> */}
        <div className="col-md-3 col-sm-6">
          <article className="card card-post">
            <img src={require("../../assets/images/posts/2.jpg")} className="card-img-top" />
            <div className="card-body">
              <h6 className="title">Thanh toán mọi lúc</h6>
              <p className="small text-uppercase text-muted">Giải pháp tài chính</p>
            </div>
          </article>
          {/* <!-- card.// --> */}
        </div>
        {/* <!-- col.// --> */}
        <div className="col-md-3 col-sm-6">
          <article className="card card-post">
            <img src={require("../../assets/images/posts/3.jpg")} className="card-img-top" />
            <div className="card-body">
              <h6 className="title">Giải pháp kiểm tra</h6>
              <p className="small text-uppercase text-muted">Kiểm tra dễ dàng</p>
            </div>
          </article>
          {/* <!-- card.// --> */}
        </div>
        {/* <!-- col.// --> */}
        <div className="col-md-3 col-sm-6">
          <article className="card card-post">
            <img src={require("../../assets/images/posts/4.jpg")} className="card-img-top" />
            <div className="card-body">
              <h6 className="title">Vận chuyển hàng không</h6>
              <p className="small text-uppercase text-muted">Dịch vụ logistics</p>
            </div>
          </article>
          {/* <!-- card.// --> */}
        </div>
        {/* <!-- col.// --> */}
      </div>
      {/* <!-- row.// --> */}

    </section>

  )
}

export default Services