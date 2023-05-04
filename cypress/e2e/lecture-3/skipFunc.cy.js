/// <reference types="cypress" />

describe('Skip Function Execution', () => {
  
    it('Test Case: 1 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

      
    it.skip('Test Case: 2 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

  
    it.skip('Test Case: 3 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })

      
    it('Test Case: 4 - User navigate to the application', () => {
  
      cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  
      cy
        .url()
        .should('include', '/login');
    })
  })
  