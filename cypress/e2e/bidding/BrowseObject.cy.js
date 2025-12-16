/**
 * @fileoverview Browse Object Test Specification
 * Tests the flow of browsing objects from the home page to lot cards.
 */

/// <reference types="cypress" />
import { BaseTest } from '../baseTest_spec.cy';

describe('Troostwijk - Browse Object Flow', () => {
  let baseTest;

  before(() => {
    // Initialize BaseTest with required page objects using Constants
    const requiredPages = [
      Cypress.Constants.PAGE_TYPES.COMMON_DIALOGS,
      Cypress.Constants.PAGE_TYPES.BASE_PAGE,
      Cypress.Constants.PAGE_TYPES.HOME,
      Cypress.Constants.PAGE_TYPES.SIGNIN,
      Cypress.Constants.PAGE_TYPES.ALL_AUCTIONS,
      Cypress.Constants.PAGE_TYPES.AUCTION,
      Cypress.Constants.PAGE_TYPES.OBJECTDETAILS
    ];

    baseTest = new BaseTest(requiredPages);

    // Load test data
    return baseTest.loadTestData();
  });

  beforeEach(() => {
    baseTest.setup();
  });

  it('should navigate from home page to lot card', function() {
    // Step 1: Open Home page
    cy.step('Open Home Page', () => {
      baseTest.homePage.visit();
      baseTest.homePage.verifyPageLoaded();
    });
    
    // Step 2: Click on "All Auctions"
    cy.step('Navigate to All Auctions', () => {
      baseTest.homePage.clickAllAuctions();
      baseTest.allAuctionsPage.verifyPageLoad();
    });
    
    // Step 3: Click on First Auction from All Auctions list
    cy.step('Select First Auction', () => {
      baseTest.allAuctionsPage.clickFirstAuctionLink();
      baseTest.auctionPage.verifyPageLoad();
    });
    
    // Step 4: Click on First Lot Card from Auction Page and browse the details
    cy.step('Select First Lot Card', () => {
      baseTest.auctionPage.clickOnLotCard(1);
      baseTest.objectDetailsPage.verifyPageLoaded();
      
    });
  });
});