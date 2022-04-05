import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <>
      <div className="profile-about pb-4 bg-white">
        {bio && (
          <>
            <p className="text-blue fs-3 fw-bolder text_border">About me </p>

            <p className="fs-4" style={{ whiteSpace: "pre-wrap" }}>
              {bio}
            </p>
          </>
        )}

        <p className="text-blue fs-3 fw-bolder text_border">
          Languages and Tools
        </p>
        <div className="skills">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="pl-2 d-inline-block repo_lang m-1 rounded-pill"
            >
              <i className="fa fa-check" style={{ color: "green" }}></i>
              <span style={{ textTransform: "capitalize", marginLeft: "4px" }}>
                {" "}
                {skill}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
