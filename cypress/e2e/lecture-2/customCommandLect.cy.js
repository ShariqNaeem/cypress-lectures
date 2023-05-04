/// <reference types="cypress" />
import loginDetails from "../../fixtures/userLogin.json";

describe('Login and Registration Page test cases', () => {

  it('User successfully login to the application', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/login');

    cy
      .url()
      .should('include', '/login');

    cy.loginCommand(loginDetails.email, loginDetails.password);
  })
})
