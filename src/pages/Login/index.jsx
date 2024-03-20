import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Style from "./login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", user);
      console.log("login succes", response);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log("Missing Password");
    }
  };

  return (
    <>
      <div className={`${Style.heroLogin} container-fluid d-flex align-items-center justify-content-center`}>
        <div className={ `${Style.loginContainer} bg-white`}>
          <h1>Ini Halaman Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={Style.formInput}>
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                name="email"
                placeholder="masukan email"
                value={user.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Password : </label>
              <input
                type="password"
                name="password"
                placeholder="masukan password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div style={{paddingTop: "20px"}}>
              <Button variant="primary" className="container-fluid" type="submit">
                Login
              </Button>
              <span>
                Doesn&apos;t have an account? <Link to="/register">Register here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
