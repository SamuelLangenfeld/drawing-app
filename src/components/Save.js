import React from "react";
import {PropTypes} from "prop-types";

export default function Save(props) {
  const {action} = props;
  return(
    <input
      type="button"
      className="button save-button"
      value="SAVE"
      onClick={(e)=>{
          action();
        }
      }
    />
  );
}


Save.propTypes = {
  action: PropTypes.func.isRequired
};