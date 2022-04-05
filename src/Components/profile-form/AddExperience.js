import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addExperience } from "../../action/profile";
const initialState = {
  company: "",
  title: "",
  location: "",
  from: "",
  to: "",
  current: false,
  description: "",
};
const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState(initialState);
  const { company, title, location, from, to, current, description } = formData;

  const [toDateDisabled, toggleDisabled] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitForm = (e) => {
    e.preventDefault();

    addExperience(formData, history);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="bg-white p-3 shadow-1" style={{}}>
          <h1 className="large text-primary">Add An Experience</h1>
          <p className="lead">
            <i className="fas fa-code-branch"></i> Add any developer/programming
            positions that you have had in the past
          </p>
          <small className="text_pink">* = required field</small>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="* Job Title"
                name="title"
                required
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Company"
                name="company"
                required
                value={company}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <h4>From Date</h4>
              <input type="date" name="from" value={from} onChange={onChange} />
            </div>
            <div className="form-group">
              <p>
                <input
                  type="checkbox"
                  name="current"
                  value={current}
                  className="form-check-input"
                  id="checkbox"
                  onChange={() => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />
                {"  "}
                <label htmlFor="checkbox"> Current Job</label>
              </p>
            </div>
            <div className="form-group">
              <h4>To Date</h4>
              <input
                type="date"
                name="to"
                value={to}
                onChange={onChange}
                disabled={toDateDisabled}
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Job Description"
                value={description}
                onChange={onChange}
              ></textarea>
            </div>
            <input
              type="Submit"
              onClick={submitForm}
              className="btn btn-primary bg_primary_special  my-1"
            />
            <Link className="btn btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
