import React from "react";

const MessingBox = (props) => {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
};

export default MessingBox;
