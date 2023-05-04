/// <reference types="cypress" />

class HomePage{

    navigateToApp(){
        cy.visit('/'); // Base URL is defined in cypress.config.js
    }

    get appLogo(){
        return cy.get('#logo');
    }

    get myAccountNavbar(){
        return cy.get('#top-links .dropdown .dropdown-toggle');
    }

    get registerOption(){
        return cy.get('#top-links .dropdown-menu li:nth-child(1)');
    }

    get loginOption(){
        return cy.get('#top-links .dropdown-menu li:nth-child(2)');
    }
}export default new HomePage()