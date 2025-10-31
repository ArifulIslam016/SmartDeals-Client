import React, { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../Context/AuthContext";

const Register = () => {
  const { LoginWithGoogle } = use(Authcontext);
  const handleSocialLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero-content max-w-md mx-auto min-h-screen my-auto flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name"  placeholder="Your Name" />
              <label>Photo Url</label>
              <input type="text" name="photoUrl" />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <button
            onClick={handleSocialLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          {
            <p>
              Already have an account{" "}
              <Link className="text-pink-600" to={"/login"}>
                Login
              </Link>
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default Register;
