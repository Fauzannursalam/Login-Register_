import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Style from "./register.module.css";

const Register = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/register", user);
      console.log("register succes", response);
      navigate("/login");
    } catch (err) {
      console.log("register failed", err);
    }
  };
  return (
    <>
      <div className={`${Style.bgRegister} container-fluid d-flex align-items-center justify-content-center`}>
        <div className={`${Style.registerContainer} bg-white`}>
          <h1>Ini Halaman Register</h1>
          <form onSubmit={handleSubmit}>
            <div className={Style.formInput}>
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                placeholder="input email"
                value={user.email}
                onChange={handleChange}
              />

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="password"
                placeholder="input password"
                onChange={handleChange}
              />
            </div>
            <div style={{paddingTop: "20px"}}>
              <Button variant="primary" type="submit" className="container-fluid">Register</Button>
              <span>
                Already have an account? <Link to="/login">Login here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
