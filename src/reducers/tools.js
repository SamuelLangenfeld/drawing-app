import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, CHANGE_STAMP, RESET, CLEAR_RESET, SAVE, CLEAR_SAVE } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#000000",
	stamp: null,
	reset: false,
	save: false
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SELECT_TOOL:
			return Object.assign({}, state, {
				tool: action.text
			})

		case CHANGE_COLOR:
			return Object.assign({}, state, {
				brush_color: action.text
			})

		case CHANGE_STAMP:
			return Object.assign({}, state, {
				stamp: action.text
			})

		case RESET:
			return Object.assign({}, state, 
				{tool: BRUSH,
					brush_size: "10",
					brush_color: "#000000",
					stamp: null,
					reset: true
				})

		case CLEAR_RESET:
			return Object.assign({}, state, {
				reset: false
			})

		case SAVE:
			return Object.assign({}, state, {
				save: true
			})

		case CLEAR_SAVE:
			return Object.assign({}, state, {
				save: false
			})

		default:
			return state
	}
}
