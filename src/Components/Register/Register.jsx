import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoEyeClosed, GoEye  } from "react-icons/go";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset errormessage and successMessage
        setErrorMessage("");
        setSuccessMessage("");

        console.log(email, password, name);
      createUser(email, password)
      .then(result =>{
        console.log(result.user);
        setSuccessMessage("Register successful");
      })
      .catch(error =>{
        setErrorMessage(error.message);
        console.error(error.message);
      })
    }

    const handleShowPassword = () =>{
      setShowPassword(!showPassword)
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
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
              <div className="absolute text-2xl right-1 top-12 text-slate-500 cursor-pointer" onClick={handleShowPassword}>
                {
                  showPassword ?
                  <GoEyeClosed></GoEyeClosed>
                  :
                  <GoEye></GoEye>
                }
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
                <p>Already have an account? please 
                    <Link to={`/login`}>
                        <button className="btn btn-active btn-link">Login</button>
                    </Link>
                </p>
            </div>
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

export default Register;
