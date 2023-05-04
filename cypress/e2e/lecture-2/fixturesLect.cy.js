/// <reference types="cypress" />
import registerDetails from "../../fixtures/userRegister.json";

describe('Data-Driven test cases of login and registration', () => {
  it('User successfully register to the application', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/register');

    cy
      .url()
      .should('include', '/register');

    // Filled the registration form
    cy.get('#input-firstname')
      .should('be.visible').type(registerDetails.firstName);

    cy.get('#input-lastname')
      .should('be.visible').type(registerDetails.lastName);

    cy.get('#input-email')
      .should('be.visible').type(registerDetails.email);

    cy.get('#input-telephone')
      .should('be.visible').type(registerDetails.telephone);

    cy.get('#input-password')
      .should('be.visible').type(registerDetails.password);

    cy.get('#input-confirm')
      .should('be.visible').type(registerDetails.confirmPassword);

    cy.get('input[type="checkbox"]')
      .should('be.visible').click();

    cy.get('[type="submit"]')
      .should('be.visible').click();
  })

  it('User successfully login to the application', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/login');

    // Call the fixture() and get the data of userLogin fixture into loginDetails
    cy.fixture('userLogin.json').then((loginDetails) => {
      cy
        .url()
        .should('include', '/login');

      // Locating the email field and used type() for written the user's email
      cy
        .get('#input-email')
        .should('be.visible')
        .type(loginDetails.email);

      // Similarly for the password field
      cy
        .get('#input-password')
        .should('be.visible')
        .type(loginDetails.password);

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
})
