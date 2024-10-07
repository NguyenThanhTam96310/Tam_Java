import React, { useState } from "react";
import { LOGIN, GET_EMAIL } from "../../api/Service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SectionContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const body = { email, password, };
    console.log("UserLogin: ", body);
    try {
      const response = await LOGIN(body);
      if (response && response.data) {
        const token = response.data['jwt-token'];

        if (token) {
          localStorage.setItem('authToken', token);
          localStorage.setItem('email', email);

          toast.success("Đăng nhập thành công", {
            position: "top-right",
            autoClose: 2000,
          });
          navigate("/");
        } else {
          toast.error("Đăng nhập thành công", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      } else {
        toast.error("Tài khoản hoặc mặt khẩu không chính xác", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Đăng nhập thấi bại:" + error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <section className="section-conten padding-y" style={{ minHeight: "84vh" }}>
      {/* <!-- ============================ THÀNH PHẦN ĐĂNG NHẬP   ================================= --> */}
      <div className="card mx-auto" style={{ maxWidth: "380px", marginTop: "100px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Đăng nhập</h4>
          <form onSubmit={handleSubmit}>
            <a href="#" className="btn btn-info btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp;  Đăng nhập bằng Facebook</a>
            <a href="#" className="btn btn-danger btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Đăng nhập bằng Google</a>
            <div className="form-group">
              <input name="email" className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group">
              <input name="password" className="form-control" placeholder="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <!-- form-group// --> */}

            <div className="form-group">
              <a href="#" className="float-right">Quên mật khẩu?</a>
              <label className="float-left custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" defaultChecked="" />
                <div className="custom-control-label"> Ghi nhớ </div>
              </label>
            </div>
            {/* <!-- form-group form-check .// --> */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block"> Đăng nhập  </button>
            </div>
            {/* <!-- form-group// --> */}
          </form>
        </div>
        {/* <!-- card-body.// --> */}
      </div>
      {/* <!-- card .// --> */}
      <p className="text-center mt-4">Chưa có tài khoản? <a href="/Register">Đăng ký</a></p>
      <br />
      <br />
      {/* <!-- ============================ THÀNH PHẦN ĐĂNG NHẬP KẾT THÚC.// ================================= --> */}
    </section>

  )
}
export default SectionContent;