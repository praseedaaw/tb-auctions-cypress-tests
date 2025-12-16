import BasePage from '../BasePage';

/**
 * Page Object Model for Troostwijk Auctions Page
 */
class AllAuctionsPage extends BasePage {
  constructor() {
    super();
    this.path = this.pageUrls.auctions; // URL is defined in the config
  }

  // ============ Element Selectors ============

  // Auction link with wildcard identification
  auctionLink() {
    return this.getElement('a[href^="/en/a/"] div.justify-between');
  }

  // ============ Actions ============

  /**
   * Click on the first auction link
   */
  clickFirstAuctionLink() {
    this.auctionLink().first().click();
  }

  /**
   * Verify the page has loaded successfully with the correct URL
   */
  verifyPageLoad() {
    this.verifyUrl(this.path);
  }
}

export default AllAuctionsPage;