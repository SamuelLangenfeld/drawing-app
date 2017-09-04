import * as actions from '../../src/actions/index.js'
import * as types from '../../src/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to change the brush size', () => {
    const text = '11'
    const expectedAction = {
      type: types.CHANGE_SIZE,
      text
    }
    expect(actions.changeSize(text)).toEqual(expectedAction)
  })

  it('should create an action to select a tool', () => {
    const text = 'BRUSH'
    const expectedAction = {
      type: types.SELECT_TOOL,
      text
    }
    expect(actions.selectTool(text)).toEqual(expectedAction)
  })

  it('should create an action to change the brush color', () => {
    const text = '#FFAABB'
    const expectedAction = {
      type: types.CHANGE_COLOR,
      text
    }
    expect(actions.changeColor(text)).toEqual(expectedAction)
  })

  it('should create an action to change the stamp', () => {
    const text = 'some stamp url'
    const expectedAction = {
      type: types.CHANGE_STAMP,
      text
    }
    expect(actions.changeStamp(text)).toEqual(expectedAction)
  })

  it('should create an action to reset the app', () => {
    const expectedAction = {
      type: types.RESET
    }
    expect(actions.reset()).toEqual(expectedAction)
  })

  it('should create an action to clear the reset on the app', () => {
    const expectedAction = {
      type: types.CLEAR_RESET
    }
    expect(actions.clearReset()).toEqual(expectedAction)
  })

  it('should create an action to save the app', () => {
    const expectedAction = {
      type: types.SAVE
    }
    expect(actions.save()).toEqual(expectedAction)
  })

  it('should create an action to clear the save on the app', () => {
    const expectedAction = {
      type: types.CLEAR_SAVE
    }
    expect(actions.clearSave()).toEqual(expectedAction)
  })
})