import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

import EditIcon from "@material-ui/icons/Edit";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar, _id },
  },
  auth,
}) => {
  return (
    <>
      <div className="profile-top profile-bg  mb-4 mt-2 p-1">
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === _id && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                top: "13px",
                right: "10px",
              }}
            >
              <Link to="/dashboard" className="fw-bold lead">
                <Fab color="secondary" aria-label="edit" size="small">
                  <EditIcon />
                </Fab>
              </Link>
            </div>
          )}

        <img className="round-img my-1" src={avatar} alt={name} />
        <p className="fs-1 fw-bolder" style={{ color: "#0453c7 !important" }}>
          {name}
        </p>



        <p className="lead">
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="fs-5">{location}</p>
        <div className="icons my-1">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
          )}
          {social && social?.twitter && (
            <a href={social?.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
          {social && social?.facebook && (
            <a
              href={social?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          )}
          {social && social?.linkedin && (
            <a
              href={social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
          {social && social?.youtube && (
            <a href={social?.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          )}
          {social && social?.instagram && (
            <a
              href={social?.instgran}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab  fa-instagram fa-2x"></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default ProfileTop;
