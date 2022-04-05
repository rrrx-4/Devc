import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.alertType}`}
      style={{
        fontSize: "24px",
        position: "absolute",
        padding: ".7rem 1rem",
        marginBottom: "1rem",
        marginRight: "1rem",
        border: "1px solid transparent",
        borderRadius: ".25rem",
        right: "40px",
        zIndex: 1000,

        boxShadow: "0 1rem 3rem rgba(0,0,0,.175)!important",
      }}
    >
      {alert.alertType === "success" ? (
        <i
          className="fa fa-check"
          style={{
            display: "inline-block",
            width: "20px",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "bold",
            marginRight: "8px",
          }}
        ></i>
      ) : alert.alertType === "danger" ? (
        <i
          className="fas fa-exclamation-triangle"
          style={{
            display: "inline-block",
            width: "20px",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "bold",
            marginRight: "8px",
          }}
        ></i>
      ) : (
        <i
          className="fas fa-exclamation"
          style={{
            display: "inline-block",
            width: "20px",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "bold",
            marginRight: "8px",
          }}
        ></i>
      )}
      {"           "} {alert.msg}
    </div>
  ));
// this going to check type of props on Alert functional components
// here we are checking type of alerts(props) should be array and is required
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateTOProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateTOProps)(Alert);
