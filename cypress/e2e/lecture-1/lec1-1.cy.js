/// <reference types="cypress" />

describe('Homepage test cases', () => {

  it('Visit opencart application',{ tags: '@testingTag' }, () => {

    cy.visit('http://opencart.abstracta.us'); // By this command we will navigate to the applicaion

    cy
      .get('#logo') //By this command we get the element that has id(logo)
      .should('be.visible'); // performed assertion by the should() method

    cy
      .contains('Your Store') // It is another way to locate an element that has text "Your Store"
      .should('be.visible');

  })

  it('Visit opencart login page', () => {

    cy.visit('https://opencart.abstracta.us/index.php?route=account/login');

    cy
      .url() // This command got the current page URL
      .should('include', '/login'); // This command performed assertion that URL includes the "/login" path

  })
})
