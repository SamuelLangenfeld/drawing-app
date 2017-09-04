import React from "react";
import { PropTypes } from "prop-types";

export default function BrushColor(props) {
  const { action, brush_color } = props;
  return (
    <input
      type="color"
      value={brush_color}
      className="brush-color"
      onChange={ (e) => {
        action(e.target.value);
      }}
    />
  );
}

BrushColor.propTypes = {
  brush_color: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};