/// <reference types="cypress" />

class SearchPage{
    validateSearchPage(){
        cy.url()
        .should('include', '/search')
    }

    get searchedProductTitle(){
        return cy.get('#content h1');
    }

    get contentSection(){
        return cy.get('#content');
    }
}export default new SearchPage()