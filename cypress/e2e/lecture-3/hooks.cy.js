/// <reference types="cypress" />
import loginDetails from "../../fixtures/userLogin.json";

describe('Login and Registration Page test cases', () => {

  let productFixture;
  before(() => {
    // This function will run once before all of the test cases present in this file
    cy.fixture('searchProduct.json').then((data) => {
      productFixture = data
    })
  })

  beforeEach(() => {
    // It will run before the every test case
    cy.visit('/index.php?route=account/login')
    cy.loginCommand(loginDetails.email, loginDetails.password); // Call the custom command of login

  })

  afterEach(() => {
    // This function is executed right after the every test case/it() block.
  })

  after(() => {
    // After all the test cases are executed then this after() will execute once. 
  })

  it('User search the product after successfully login', () => {

    cy.visit('/');

    cy
      .get('#search input')
      .should('be.visible')
      .type(`${productFixture.productName}{enter}`);

    cy
      .url()
      .should('include', productFixture.productName)
  })

  it('User search the laptop after successfully login', () => {

    cy.visit('/');

    cy
      .get('#search input')
      .should('be.visible')
      .type(`${productFixture.laptop}{enter}`);

    cy
      .url()
      .should('include', productFixture.laptop)
  })
})
