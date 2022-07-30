import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social-Era</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social-Era.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              min={3}
              required
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              className="loginInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="loginInput"
              min="6"
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              ref={passwordAgain}
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
