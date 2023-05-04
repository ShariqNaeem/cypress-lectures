/// <reference types="cypress" />

class myAccountPage{
    validateMyAccountPage(){
        cy.url()
        .should('include', '/account')
    }

    get searchField(){
        return cy.get('#search input');
    }
}export default new myAccountPage()