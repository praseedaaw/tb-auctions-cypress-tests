import BasePage from '../BasePage';

/**
 * Page Object Model for Object Details Page of Troostwijk
 */
class ObjectDetailsPage extends BasePage {
  // ============ Configuration ============
  constructor() {
    super();
    this.path = this.pageUrls.objectDetails; // Update with the correct path if available
  }

  // ============ Element Selectors ============

  closingTimeText() {
    return this.getElement('[data-cy="item-bid-closing-time-text"]');
  }

  countdownText() {
    return this.getElement('[data-cy="item-bid-countdown-text"]');
  }

  currentBidText() {
    return this.getElement('[data-cy="item-bid-current-bid-text"]');
  }

  textLeftSpan() {
    return this.getElement('#__next span.text-left');
  }

  placeBidButton() {
    return this.getElement('[data-cy="item-bid-place-bid-button"]');
  }

  createAccountButton() {
    return this.getElement('[data-cy="item-bid-create-account-button"]');
  }

  recentBiddersFirstDiv() {
    return this.getElement('[data-cy="item-bid-recent-bidders"] div.pl-0');
  }

  recentBiddersThirdDiv() {
    return this.getElement('[data-cy="item-bid-recent-bidders"] div:nth-child(3)');
  }

  recentBiddersLastDiv() {
    return this.getElement('[data-cy="item-bid-recent-bidders"] div.pr-0');
  }

  locationText() {
    return this.getElement('[data-cy="item-location-text"]');
  }
  
  displayIdText() {
    return this.getElement('[data-cy="item-display-id-text"] dd');
  }
  soldByText() {
    return this.getElement('#__next dl:nth-child(2) dd');
  }

  auctionLink() {
    return this.getElement('[data-cy="item-auction-link"] a.no-underline');
  }

  previousItemLink() {
    return this.getElement('[data-cy="previous-item-link"]');
  }

  nextItemLink() {
    return this.getElement('[data-cy="next-item-link"] span.xl\\:hidden');
  }

  // ============ Actions ============

  /**
   * Navigate to Object Details page
   */
  visit() {
    super.visit(this.path);
  }

  // ============ Assertions ============

  /**
   * Verify page has loaded successfully
   */
  verifyPageLoaded() {
    this.closingTimeText().should('be.visible');
    this.countdownText().should('be.visible');
    this.currentBidText().should('be.visible');
    this.textLeftSpan().should('be.visible');
    this.placeBidButton().should('be.visible');
    this.createAccountButton().should('be.visible');
    this.recentBiddersFirstDiv().should('be.visible');
    this.recentBiddersThirdDiv().should('be.visible');
    this.recentBiddersLastDiv().should('be.visible');
    this.locationText().should('be.visible');
    this.displayIdText().should('be.visible');
    this.soldByText().should('be.visible');
    this.auctionLink().should('be.visible');
    this.previousItemLink().should('be.visible');
    this.nextItemLink().should('be.visible');
  }
}

export default ObjectDetailsPage;