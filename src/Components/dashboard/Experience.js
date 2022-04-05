import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteExperience } from "../../action/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : "Now"}
      </td>
      <td>
        {/* <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button> */}

        <span
          onClick={() => deleteExperience(exp._id)}
          className="float-right text-danger fs-5"
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
          <span className="hide-sm"> {"  "}Delete</span>
        </span>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="mt-5">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
