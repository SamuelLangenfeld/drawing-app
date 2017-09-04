import tools from '../../src/reducers/tools'
import * as types from '../../src/constants/ActionTypes'
import * as tool_types from '../../src/constants/Tools'

describe('tools reducer', () =>{
  it ('should return the initial state', ()=>{
    expect(tools(undefined, {})).toEqual(
      {
        brush_size: '10',
        tool: tool_types.BRUSH,
        brush_color: '#000000',
        stamp: null,
        reset: false,
        save: false
      }
    )
  })

  it ('should handle the change size action', ()=> {
    expect(tools(undefined, {type: types.CHANGE_SIZE, text:'11'})).toHaveProperty('brush_size', '11')
  })

  it ('should handle the select tool action', ()=> {
    expect(tools(undefined, {type: types.SELECT_TOOL, text:tool_types.STAMP})).toHaveProperty('tool', 'STAMP')
  })

  it ('should handle the change color action', ()=> {
    expect(tools(undefined, {type: types.CHANGE_COLOR, text:'#BBBBBB'})).toHaveProperty('brush_color', '#BBBBBB')
  })

  it ('should handle the change stamp action', ()=> {
    expect(tools(undefined, {type: types.CHANGE_STAMP, text:'some stamp string'})).toHaveProperty('stamp', 'some stamp string')
  }) 

  it ('should handle the reset action', ()=> {
    var starting_state=(tools(undefined, {type:types.CHANGE_COLOR, text: '#222222'}));
    starting_state=tools(starting_state, {type:types.CHANGE_SIZE, text: '40'})
    var reset_state=tools(starting_state, {type:types.RESET});
    expect(reset_state).toHaveProperty('brush_color', '#000000');
    expect(reset_state).toHaveProperty('brush_size', '10');
    expect(reset_state).toHaveProperty('reset', true);
  })

  it ('should handle the clear reset action', ()=> {
    var reset_state=tools(undefined, {type: types.RESET});
    expect(reset_state.reset).toEqual(true);
    expect(tools(reset_state, {type:types.CLEAR_RESET})).toHaveProperty('reset', false);
  })

  it ('should handle the save action', ()=> {
    expect(tools(undefined, {type: types.SAVE})).toHaveProperty('save', true)
  })

  it ('should handle the clear save action', ()=> {
    const saved_state=(tools(undefined, {type:types.SAVE}));
    expect(tools(saved_state, {type: types.CLEAR_SAVE})).toHaveProperty('save', false)
  })
})