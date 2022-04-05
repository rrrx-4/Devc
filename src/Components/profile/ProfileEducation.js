import React from "react";
import PropTypes from "prop-types";

import DateObject from "react-date-object";
const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <>
      <div className="px-3">
        <p className="fs-4 text_primary_special mb-0">{school}</p>
        <p>
          {new DateObject(from).format("MMMM YYYY")} -{" "}
          {to ? new DateObject(to).format("MMMM YYYY") : "Now"}
        </p>
        <p>
          <strong>Degree: </strong> {degree}
        </p>
        <p>
          <strong>Field Of Study: </strong> {fieldofstudy}
        </p>
        {description && (
          <p style={{ whiteSpace: "pre-wrap" }}>
            <strong style={{ whiteSpace: "pre-wrap" }}>Description: </strong>{" "}
            {description}
          </p>
        )}
      </div>
    </>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
