import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const Spinner = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <CircularProgress
          color="primary"
          style={{ width: "120px", height: "120px" }}
        />
      </div>
    </>
  );
};

export default Spinner;
