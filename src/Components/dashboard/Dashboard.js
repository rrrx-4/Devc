import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAccount, getCurrentProfile } from "../../action/profile";
import DashboardAction from "./DashboardAction";
import Spinner from "../layout/Spinner";
import Experience from "./Experience";
import Education from "./Education";
const Dashboard = ({
  profile: { profile, loading },
  auth: { user },
  deleteAccount,
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]); // empty array for only one time call

  return loading && profile == null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary m-2">Dashboard</h1>
      <p className="text_blue m-2">
        <i className="fas fa-user "></i> Welcome {user && user.name}
      </p>
      {profile != null ? (
        <>
          <DashboardAction />
          <Experience experience={profile.experience} />

          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus"></i> {"  "}Delete Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p> You have not yet setup a profile , Please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </>
  );
};

// these profs we needed
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

// these state we are going to use
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

// connecting to redux connect(state , action)(component)
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
