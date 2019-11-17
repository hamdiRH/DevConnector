import React, { Fragment } from "react";
import spinner from "../../img/giphy.gif";
export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};
