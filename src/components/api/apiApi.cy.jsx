import React from 'react'
import Api from './api'


describe('<Api />', () => {
  it('renders', () => {
    cy.mount(<Api />)
  })


  it('renders the Api component with mocked data', () => {

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/', {
      fixture: 'posts.json',
    });
    cy.mount(<Api />)
  
  
    cy.get('h1').should('contain', 'List of posts');
    cy.get('ul[data-cy="post-ul"]').find('li[data-cy="post-list"]').should('have.length', 10);
  

  });
  

 
})