import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setBackdrop("");
        props.setNavBox("");
        props.setNavBoxBool((bool) => {
          return !bool;
        });
      }}
      className="backdrop"
    ></div>
  );
};

export default Backdrop;
