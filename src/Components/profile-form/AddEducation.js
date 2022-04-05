import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../action/profile";
const initialState = {
  school: "",
  degree: "",
  fieldofstudy: "",
  from: "",
  to: "",
  current: false,
  description: "",
};
const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState(initialState);
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const [toDateDisabled, toggleDisabled] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitForm = (e) => {
    e.preventDefault();

    addEducation(formData, history);
  };
  return (
    <div className="bg-white p-3 shadow-1">
      <h1 className="large text-primary">Add An Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school/bootcamp that you
        have attempted
      </p>
      <small className="text_pink">* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
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
              checked={toDateDisabled}
              value={current}
              className="form-check-input"
              id="checkbox"
              onChange={() => toggleDisabled(!toDateDisabled)}
            />
            {"    "}
            <label htmlFor="checkbox">Current School</label>
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
            className="bd-1"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          />
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
  );
};

addEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
