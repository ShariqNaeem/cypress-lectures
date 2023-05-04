import loginDetails from "../../fixtures/userLogin.json";
import searchProduct from "../../fixtures/searchProduct.json";

import homePage from '../../support/pageObjects/home-page';
import loginPage from '../../support/pageObjects/login-page';
import myAccountPage from '../../support/pageObjects/myAccount-page';
import searchPage from '../../support/pageObjects/search-page';

describe('Using POM: User search the product', () => {

    it('Search the product after login', () => {
        homePage.navigateToApp();
        homePage.appLogo.should('be.visible');
        homePage.myAccountNavbar.should('exist').click();
        homePage.loginOption.should('be.visible').click();
        
        loginPage.validateLoginPage;
        loginPage.emailField.should('be.visible').type( loginDetails.email );
        loginPage.passwordField.should('be.visible').type( loginDetails.password );
        loginPage.loginButton.should('be.visible').click();

        myAccountPage.validateMyAccountPage();
        myAccountPage.searchField.should('be.visible').type(`${searchProduct.productName}{enter}`);

        searchPage.validateSearchPage();
        searchPage.contentSection.should('be.visible');
        searchPage.searchedProductTitle.should('contain.text', searchProduct.productName);
    })
  })