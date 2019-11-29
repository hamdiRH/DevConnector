import React from "react";

const notfound = props => {
  return (
    <>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i>
        Page Not Found
        <p>Sorry, this page does not exist</p>
      </h1>
    </>
  );
};

export default notfound;
