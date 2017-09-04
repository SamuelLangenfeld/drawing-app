import React from 'react'
import { mount } from 'enzyme'
import BrushColor from '../../src/components/BrushColor'


function setup() {
  const props = {
    action: jest.fn(),
    brush_color: ''
  }

  const enzymeWrapper = mount(<BrushColor {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () =>{
  describe('BrushColor', ()=>{
    it('should render self', ()=>{
      const {enzymeWrapper}=setup()
       expect(enzymeWrapper.find('input').hasClass('brush-color')).toBe(true)
    })
  })
})