import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/layout/Spinner";
import { getProfiles } from "../../action/profile";

import ProfileItem from "./ProfileItem";
const Profiles = ({
  getProfiles,
  profile: { profiles, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div>
                <p
                  className="text_blue"
                  style={{
                    fontSize: "52px",
                    fontWeight: "700",
                    lineHeight: "62px",
                    marginBottom: "5px",
                  }}
                >
                  Developers
                </p>
                <div>
                  <p className="fs-5 text-muted">
                    <i className="fab fa-connectdevelop" /> Browse and connect with developers
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-2 gy-3" style={{

              padding: "2px"
            }}>
              {profiles.length > 1 ? (
                profiles.map(
                  (profile) =>
                    user?._id !== profile.user?._id && (
                      <ProfileItem key={profile._id} profile={profile} />
                    )
                )
              ) : (
                <h3>No profiles found...</h3>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
