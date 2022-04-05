import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../action/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [Fetching, setFetching] = useState(false);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    login({ email, password });
    setFetching(false);
  };

  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="mx-auto  h-100 d-flex justify-content-center align-items-center">
            <div className="d-table-cell align-middle justify-content-center">
              <div className="text-center">
                <h2 className="h2">Welcome back, Dev Community</h2>
                <p className="lead hide-sm">SignIn to continue your account </p>
              </div>
              <div className="card">
                <div className="card-body">
                  <h3 className="large text-primary text-center">Sign In</h3>

                  <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                      />
                      {/* <small>
                          <a href="pages-reset-password.html">
                            Forgot password?
                          </a>
                        </small> */}
                    </div>

                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="custom_button"
                        value="Login"
                        disabled={Fetching}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="fs-4">
                    Doesn't have an account?{" "}
                    <Link to="/register">
                      <span className="fs-4 text-primary d-inline-block">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
