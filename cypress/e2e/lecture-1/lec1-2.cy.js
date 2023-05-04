/// <reference types="cypress" />

describe('Login and Registration Page test cases', () => {
  it('User successfully register to the application', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/register');

    cy
      .url()
      .should('include', '/register');

    // Filled the registration form
    cy.get('#input-firstname')
      .should('be.visible').type('testuser');

    cy.get('#input-lastname')
      .should('be.visible').type('user');

    cy.get('#input-email')
      .should('be.visible').type('testuser@yopmail.com');

    cy.get('#input-telephone')
      .should('be.visible').type('03001234567');

    cy.get('#input-password')
      .should('be.visible').type('testuser1');

    cy.get('#input-confirm')
      .should('be.visible').type('testuser1');

    cy.get('input[type="checkbox"]')
      .should('be.visible').click();

    cy.get('[type="submit"]')
      .should('be.visible').click();
  })


  it('User successfully login to the application', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/login');

    cy
      .url()
      .should('include', '/login');

    // Locating the email field and used type() for written the user's email
    cy
      .get('#input-email')
      .should('be.visible')
      .type('testuser@yopmail.com');

    // Similarly for the password field
    cy
      .get('#input-password')
      .should('be.visible')
      .type('testuser1');

    // Click on the Login Button
    cy
      .get('input[value="Login"]')
      .should('be.visible')
      .click();

    // Performed Assertion on the URL for successfully login
    cy
      .url()
      .should('include', '/account');
  })
})
