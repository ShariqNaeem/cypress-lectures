/// <reference types="cypress" />

describe('Only Function Execution', () => {
  
    it('Test Case: 1 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

      
    it('Test Case: 2 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

  
    it.only('Test Case: 3 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

      
    it.only('Test Case: 4 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })
  })
  