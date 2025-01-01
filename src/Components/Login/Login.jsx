import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoEyeClosed, GoEye  } from "react-icons/go";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {loggedInUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset errormessage and successMessage
        setErrorMessage("");
        setSuccessMessage("");

        console.log(email, password);

        loggedInUser(email, password)
        .then(result =>{
          setSuccessMessage("Logged In Successful");
        })
        .catch(error =>{
          setErrorMessage(error.message);
        })
    }

    const handleShowPassword = () =>{
      setShowPassword(!showPassword)
    }
    
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="absolute text-2xl right-1 top-3 text-slate-500 cursor-pointer" onClick={handleShowPassword}>
                {
                  showPassword ?
                  <GoEyeClosed></GoEyeClosed>
                  :
                  <GoEye></GoEye>
                }
              </div>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              new here? please
              <Link to={`/register`}>
                <button className="btn btn-active btn-link">Register</button>
              </Link>
            </p>
            <div>
              {
                errorMessage && <p className="text-red-700  font-bold">{errorMessage}</p>
              }
              {
                successMessage && <p className="text-green-700 font-bold">{successMessage}</p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
