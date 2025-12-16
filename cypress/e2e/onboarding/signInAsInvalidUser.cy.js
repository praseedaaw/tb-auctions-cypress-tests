/**
 * @fileoverview Sign In as Invalid User Test Specification
 * Uses dependency injection pattern for efficient page object management
 */

/// <reference types="cypress" />
import { BaseTest } from '../baseTest_spec.cy';

describe('Troostwijk - Sign In as Invalid User', () => {
  let baseTest;

  before(() => {
    // Initialize BaseTest with required page objects using Constants
    const requiredPages = [
        Cypress.Constants.PAGE_TYPES.COMMON_DIALOGS,
        Cypress.Constants.PAGE_TYPES.BASE_PAGE,
        Cypress.Constants.PAGE_TYPES.HOME,
        Cypress.Constants.PAGE_TYPES.SIGNIN
    ];

    console.log('Required pages for BaseTest:', requiredPages);

    baseTest = new BaseTest(requiredPages);

    // Load test data
    return baseTest.loadTestData();
  });

  beforeEach(() => {
    baseTest.setup();
  });

  it('should display error message for incorrect password', function() {
    // Step 1: Attempt to sign in with invalid user credentials
    cy.step('Sign In: Attempt with invalid credentials', () => {
        baseTest.homePage.visit();
        baseTest.homePage.clickSignInButton();
        baseTest.signInPage.verifyPageLoaded();
        baseTest.signInPage.signIn(baseTest.userData.invalidUser.email, baseTest.userData.invalidUser.password);
    });

    // Step 2: Verify the error message is displayed
    cy.step('Verification: Check error message', () => {
      baseTest.signInPage.verifyIncorrectPasswordError();
    });
  });
});
