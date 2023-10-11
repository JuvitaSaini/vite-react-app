import React from 'react'
import Form from './form'

describe('<Form />', () => {
  beforeEach('renders', () => {
    cy.mount(<Form />)
  })
  const submitBtn=`[data-qa="submitBtn"]`;
  it('testing form',()=>{
    cy.get(submitBtn).should("be.visible");
    cy.get(submitBtn).click(); 
  })
})