/// <reference types="cypress" />

class LoginPage{
    validateLoginPage(){
        cy.url()
        .should('include', '/index.php?route=account/login')
    }

    get emailField(){
        return cy.get('#input-email');
    }

    get passwordField(){
        return cy.get('#input-password');
    }

    get loginButton(){
        return cy.get('input[value="Login"]');
    }
}export default new LoginPage()