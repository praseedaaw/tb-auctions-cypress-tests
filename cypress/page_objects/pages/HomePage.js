import BasePage from '../BasePage';

/**
 * Page Object Model for Troostwijk Home Page
 */
class HomePage extends BasePage {
  // ============ Configuration ============
  constructor() {
    super();
    this.path = this.pageUrls.base;
  }

  // ============ Element Selectors ============

  // Sign In button
  signInButton() {
    return this.getElement('div.flex.gap-2 [data-cy="header-auth-button"]');
  }

  // All Auctions button
  allAuctionsButton() {
    return this.getElement('[data-cy="header-all-auctions-button"]');
  }

  // ============ Actions ============

  /**
   * Navigate to home page
   */
  visit() {
    super.visit(this.path);
  }

  /**
   * Click Sign In button
   */
  clickSignIn() {
    this.signInButton().click();
  }

  /**
   * Click All Auctions button
   */
  clickAllAuctions() {
    this.allAuctionsButton().click();
  }

  // ============ Assertions ============
  
  /**
   * Verify page has loaded successfully
   */
  verifyPageLoaded() {
    this.verifyUrl(this.path);
    // Add more assertions as needed to verify home page elements
  }

  /**
   * Click on Sign In button on Home Page
   */
  clickSignInButton() {
    this.signInButton().click();
  }
}

export default HomePage;