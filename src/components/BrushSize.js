import React from "react";
import  { PropTypes } from "prop-types";

export default function BrushSize(props) {
	const { action, brush_size } = props;
	return (
		<input
			type="number"
			className="number-input"
			value={brush_size}
			onChange={ (e) => {
				action(e.target.value);
			}}
		/>
	);
}

BrushSize.propTypes = {
	brush_size: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};