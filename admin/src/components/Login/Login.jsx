import { useContext, useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ url }) => {
  const navigate = useNavigate();
  const { admin, setAdmin, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    //test purpose credentials
    const adminCredentials = {
      email: "johndoe@test.com",
      password: "Test@123", 
    };

    
    if (data.email === adminCredentials.email && data.password === adminCredentials.password) {
      const token = "your_admin_token"; 
      setToken(token);
      setAdmin(true);
      localStorage.setItem("token", token);
      localStorage.setItem("admin", true);
      toast.success("Login Successfully");
      navigate("/add");
    } else {
      
      try {
        const response = await axios.post(url + "/api/user/login", data);
        if (response.data.success) {
          
          if (response.data.role === "admin") {
            setToken(response.data.token);
            setAdmin(true);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("admin", true);
            toast.success("Login Successfully");
            navigate("/add");
          } else {
            toast.error("You are not an admin");
          }
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Login error:", error); 
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (admin && token) {
      navigate("/add");
    }
  }, [admin, token, navigate]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Prop types 
Login.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Login;
