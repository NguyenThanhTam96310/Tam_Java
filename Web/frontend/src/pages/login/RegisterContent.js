import React, { useState } from "react";
import { LOGIN } from "../../api/Service"; // Replace this with actual registration API
import { useNavigate } from "react-router-dom";

const RegisterContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (formData.password !== formData.confirmPassword) {
      formErrors.password = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      formErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Add your registration logic here, e.g., calling an API endpoint
    console.log("Registration data:", formData);

    // After successful registration, navigate to the login page
    navigate("/login");
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ maxWidth: "520px", marginTop: "40px" }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Đăng ký</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col form-group">
                <label htmlFor="firstName">Tên</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="col form-group">
                <label htmlFor="lastName">Họ</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="mobileNumber">Số điện thoại di động</label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                />
                {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password">Tạo mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                {formData.password !== formData.confirmPassword && <small className="text-danger">Mật khẩu không khớp</small>}
              </div>
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  className="custom-control-input"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                />
                <div className="custom-control-label text-warning">
                  Tôi đồng ý với các điều khoản và điều kiện
                </div>
                {errors.agreeToTerms && <small className="text-danger">{errors.agreeToTerms}</small>}
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block" style={{ backgroundColor: '#ff6600', color: 'white' }}>
                Đăng ký
              </button>
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">
        Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
      </p>
    </section>

  );
};

export default RegisterContent;
