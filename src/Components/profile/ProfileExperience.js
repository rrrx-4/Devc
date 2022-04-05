import React from "react";
import PropTypes from "prop-types";

import DateObject from "react-date-object";
const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <>
      <div className="px-3">
        <p className="fs-3 text_primary_special mb-0">{title}</p>
        <p className="fs-5 fw-bold text-dark my-0">{company}</p>

        <p>
          {new DateObject(from).format("MMMM YYYY")} -{" "}
          {to ? new DateObject(to).format("MMMM YYYY") : "Now"}
        </p>

        <p>
          <strong>Location: </strong> {location}
        </p>
        {description && (
          <p>
            <strong>Description : </strong>{" "}
            <span
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              {" "}
              {description}{" "}
            </span>
          </p>
        )}
      </div>
    </>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
