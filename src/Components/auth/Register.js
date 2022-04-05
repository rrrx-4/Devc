import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../action/alert";
import { register } from "../../action/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto  h-100 d-flex justify-content-center align-items-center">
            <div className="d-table-cell align-middle justify-content-center">
              <div className="text-center">
                <h2 className="h2">Welcome back, Dev Community</h2>
                <p className="lead hide-sm">Join Community of Developer </p>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <h3 className="large text-primary text-center">Sign Up</h3>

                  <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="name">
                        Username
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value={name}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        value={email}
                        onChange={onChange}
                      />
                      <small className="form-text">
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                      </small>
                    </div>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="fs-5" htmlFor="password2">
                        Confirm Password
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        id="password2"
                        value={password2}
                        onChange={onChange}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <button type="submit" className="custom_button">
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="fs-4">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="fs-4 text-primary d-inline-block">
                        Sign In
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
