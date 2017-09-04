import * as types from '../constants/ActionTypes'

export const selectTool = text => ({ type: types.SELECT_TOOL, text });
export const changeSize = text => ({ type: types.CHANGE_SIZE, text });
export const changeColor = text => ({type: types.CHANGE_COLOR, text});
export const changeStamp = text => ({type: types.CHANGE_STAMP, text});
export const reset = () => ({type: types.RESET});
export const clearReset= () =>({type: types.CLEAR_RESET});
export const save = () =>({type:types.SAVE});
export const clearSave = () =>({type:types.CLEAR_SAVE});