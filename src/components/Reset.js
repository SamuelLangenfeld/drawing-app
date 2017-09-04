import React from "react";
import  { PropTypes } from "prop-types";

export default function Reset(props) {
  const {action} = props;
  return(
    <input
      type="button"
      value="RESET"
      className="button reset-button"
      onClick={(e)=>{
          action();
        }
      }
    />
  );
}

Reset.propTypes = {
  action: PropTypes.func.isRequired
};