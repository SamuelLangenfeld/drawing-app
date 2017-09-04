import React from 'react'
import { mount } from 'enzyme'
import StampPreview from '../../src/components/StampPreview'


function setup() {
  const props = {
    action: jest.fn(),
    brush_color: ''
  }

  const enzymeWrapper = mount(<StampPreview {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () =>{
  describe('StampPreview', ()=>{
    it('should render self', ()=>{
      const {enzymeWrapper}=setup()
       expect(enzymeWrapper.find('img').hasClass('stamp-preview')).toBe(true)
    })
  })
})