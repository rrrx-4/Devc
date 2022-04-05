import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../action/profile";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {loading === true || profile === null ? (
        <Spinner />
      ) : (
        <>
          {/* <Link
            to="/profiles"
            role="button"
            className="mt-2 text-lg-center hide-sm"
          >
            <i className="fas fa-long-arrow-alt-left"></i>{" "}
            <strong> {"  "}Back</strong>
          </Link> */}

          <div className="p-1">
            <ProfileTop profile={profile} auth={auth} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2 my-3">
              <h2 className="text_grad_1 mx-2 text_border">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
            <div className="profile-edu bg-white p-2 my-3">
              <h2 className="text_grad_1 mx-2 text_border">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>
          </div>

          {profile.githubusername && (
            <ProfileGithub username={profile?.githubusername} />
          )}
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfileById })(Profile);
