import React from 'react'
import Counter from './counter'

describe('<Counter />', () => {

  beforeEach("mount Counter",()=>{
    cy.mount(<Counter />)
  })
 
 it("counter initial value test",()=>{
  cy.contains("span","0")
  cy.get("span").should("contain", "0");
 })

 it("button increment test",()=>{
   cy.get(".increment-btn").click();
   cy.get("span").should("contain", "1");
   
 })
 
 it("button decrement test",()=>{
  cy.get(".decrement-btn").click();
  cy.get("span").should("contain", "-1");
})


it("incement and decrement working together test",()=>{
  cy.get(".decrement-btn").click().click();
  cy.get(".increment-btn").click().click().click();
  cy.get("span").should("contain","1")
})

})

