import React, { Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";
import {PropTypes} from "prop-types";

let ctx;


export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
		ctx.fillStyle='white';
		ctx.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);	
	}

	componentWillReceiveProps(nextProps){
		const clear_reset = this.props.actions.clearReset;
		const clear_save = this.props.actions.clearSave;
		this.isDrawing = false;
		if (nextProps.tools.reset){
			ctx.fillRect(0,0,this.refs.canvas.width, this.refs.canvas.height);
			clear_reset();
		}
		if (nextProps.tools.save){
			var canvasURL = this.refs.canvas.toDataURL();
			window.open(canvasURL, "_blank");
			clear_save();
		}
	}

	getStroke() {
		return this.props.tools.brush_size;
	}

	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			
		}
		else if (this.props.tools.tool === STAMP){
			if (this.props.tools.stamp){
				var xOffset= this.props.tools.stamp.width/2;
				var yOffset= this.props.tools.stamp.height/2;
				ctx.drawImage(this.props.tools.stamp, this.getX(event)-xOffset, this.getY(event)-yOffset);
			}
			
		}
	}

	draw(event) {
		if (this.isDrawing) {
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineWidth = this.getStroke();
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			if (this.props.tools.tool === ERASER){
				ctx.strokeStyle= "#FFFFFF";
			}
			else if (this.props.tools.tool === BRUSH){
				ctx.strokeStyle= this.props.tools.brush_color;
			}
			ctx.stroke();
		}
		
	}

	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		
	}

	render() {
		return (
			<canvas
				className="canvas"
				ref="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired
}