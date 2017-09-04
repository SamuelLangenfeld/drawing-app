import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import ImageStamp from "./ImageStamp";
import StampPreview from './StampPreview.js';
import Reset from './Reset.js';
import Save from './Save.js';


export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		const {brush_color} = tools;
		const {stamp} = tools;
		return (
			<div className="sidebar">
				<div className="section-wrapper">
					<section className="section section--tool-selector">
						<div className="section-content-wrapper">
							<h3 className="section__heading">TOOL</h3>
							<ToolSelector
								tool={ tools.tool }
								action={ actions.selectTool }
							/>
						</div>
					</section>

					
					<section className="section section--brush-size">
						<div className="section-content-wrapper">
							<h3 className="section__heading">BRUSH SIZE</h3>
							<BrushSize
								brush_size={ brush_size }
								action={ actions.changeSize }
							/>
						</div>
					</section>
				
					<section className="section section--brush-color">
						<div className="section-content-wrapper">
							<h3 className="section__heading">BRUSH COLOR</h3>
							<BrushColor
								brush_color={ brush_color }
								action={ actions.changeColor }
							/>
						</div>
					</section>

					<section className="section section--image-stamp">
						<div className="section-content-wrapper">
							<h3 className="section__heading">IMAGE STAMP</h3>
							<ImageStamp
								action={ actions.changeStamp }
							/>
							<StampPreview
								stamp={ stamp }
							/>
						</div>
					</section>

					<section className="section section--reset">
						<div className="section-content-wrapper">
							<h3 className="section__heading">RESET</h3>
							<Reset
								action={ actions.reset }
							/>
						</div>
					</section>
					<section className="section section--save">
						<div className="section-content-wrapper">
							<h3 className="section__heading">SAVE</h3>
							<Save
								action={ actions.save }
							/>
						</div>
					</section>
				</div>
			</div>
		)
	}
}
