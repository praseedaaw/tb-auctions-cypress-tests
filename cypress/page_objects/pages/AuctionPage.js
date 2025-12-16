import BasePage from '../BasePage';

/**
 * Page Object Model for Troostwijk Auction Page
 */
class AuctionPage extends BasePage {
  constructor() {
    super();
  }

  // ============ Element Selectors ============

  // Lot card element based on index
  lotCard(index) {
    return this.getElement(`[data-cy] li:nth-of-type(${index}) [class="no-underline heading-6 mt-0 line-clamp-2 text-c-text-neutral-obvious-default"]`);
  }

  // ============ Actions ============

  /**
   * Click on a specific lot card by index
   * @param {number} index - The index of the lot card to click
   */
  clickOnLotCard(index) {
    this.lotCard(index).click();
  }

  /**
   * Verify the page has loaded successfully with the correct auction URL format
   */
  verifyPageLoad() {
    cy.url().should('match', /https:\/\/www\.troostwijkauctions\.com\/en\/a\/[^/]+/);
  }
}

export default AuctionPage;