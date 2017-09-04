import React from "react";
import  { PropTypes } from "prop-types";

import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
	const { action, tool } = props;
	return (
		<div className="toolbar">

				<input type="button" name="tool" id="brush-select"
					className={"tool-button button "+ (tool===BRUSH ? "selected-tool-button" : "")}
					value={BRUSH} 
					defaultChecked={tool === BRUSH}
					onClick={ (e) => { action(e.target.value) } }
					 />
					
				



				<input type="button" name="tool" id="stamp-select"
					className={"tool-button button "+ (tool===STAMP ? "selected-tool-button" : "")}
					value={STAMP} 
					defaultChecked={tool === STAMP} 
					onClick={ (e) => { action(e.target.value) } }
					 />


				<input type="button" name="tool" id="eraser-select"
					className={"tool-button button "+ (tool===ERASER ? "selected-tool-button" : "")}
					value={ERASER} 
					defaultChecked={tool === ERASER} 
					onClick={ (e) => { action(e.target.value) } } />
				
		</div>
	);
}

ToolSelector.propTypes = {
	tool: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};