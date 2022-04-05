import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../action/auth";
import { LinearProgress } from "@material-ui/core";

const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="nav-grp-link">
      <li>
        <NavLink exact activeClassName="active_class" to="/posts">
          <i className="fas fa-home mx-1"></i> {"     "}
          <span className="hide-sm"> Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          activeClassName="active_class"
          to="/profiles"
        >
          <i className="fas fa-users mx-1"></i> {"     "}
          <span className="hide-sm"> Developers</span>
        </NavLink>
      </li>

      {user && isAuthenticated && (
        <li>
          <NavLink
            exact
            activeClassName="active_class"
            to={`/profile/${user._id}`}
          >
            <i className="fas fa-user mx-1"></i>
            {"   "}
            <span className="hide-sm ">Profile</span>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          exact
          activeClassName="active_class"
          onClick={logout}
          to="/"
        >
          <i className="fas fa-sign-out-alt mx-1"></i>
          {"   "}
          <span className="hide-sm"> logout</span>
        </NavLink>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav-grp-link">
      {/* <li className="hide-sm">
        <NavLink
          exact
          activeClassName="active_class"
        
          to="/profiles"
        >
          <span className="hide-sm">Developers</span>
        </NavLink>
      </li> */}

      <li>
        <NavLink
          exact
          activeClassName="active_class"
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active_class" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      {loading ? (
        <LinearProgress color="secondary" style={{ height: "9px" }} />
      ) : (
        <nav className="navbar bg-dark">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: "28px"
          }}>
            <i className="fas fa-code"></i>{" "}
            <Link to="/posts" className="hide-sm highlight">DevConnector</Link>

          </div>

          {!loading && <> {isAuthenticated ? authLinks : guestLinks}</>}
        </nav>
      )}
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
