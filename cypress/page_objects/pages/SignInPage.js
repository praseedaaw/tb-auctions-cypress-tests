import BasePage from '../BasePage';

/**
 * Page Object Model for Troostwijk Sign In Page
 */
class SignInPage extends BasePage {
  constructor() {
    super();
    this.path = 'https://login.troostwijkauctions.com/troostwijkb2c.onmicrosoft.com/b2c_1a_signup_signin_v2/oauth2/v2.0/authorize?client_id=b02b0de5-86e5-4657-bac8-4cfec4db78c5&scope=offline_access%20openid&response_type=code&redirect_uri=https%3A%2F%2Fwww.troostwijkauctions.com%2Fapi%2Fauth%2Fcallback%2Fazure-ad-b2c&ui_locales=en&callbackUrl=%2Fen%2Fauth%2Fcompletion%3FredirectPath%3D%2F&redirectUrl=https%3A%2F%2Fwww.troostwijkauctions.com%2Fen&state=UGmfe3ieo6g0taT1J8oOaRlFFWH74uFu1PGwLw_10OM';
  }

  // ============ Element Selectors ============

  // Email input field
  emailInput() {
    return this.getElement('[name="Email Address"]');
  }

  // Password input field
  passwordInput() {
    return this.getElement('[name="Password"]');
  }

  // Sign In button
  signInButton() {
    return this.getElement('button[type="submit"]');
  }

  // Error message
  errorMessage() {
    return this.getElement('form#localAccountForm > div[role="alert"] > p');
  }

  // ============ Actions ============

  /**
   * Navigate to login page
   */
  visit() {
    cy.origin('https://login.troostwijkauctions.com', () => {
      cy.visit(this.path);
    });
  }

  /**
   * Login with email and password
   * @param {string} email - User email
   * @param {string} password - User password
   */
  signIn(email, password) {
    cy.origin('https://login.troostwijkauctions.com', { args: { email, password } }, ({ email, password }) => {
      cy.get('[name="Email Address"]').type(email);
      cy.get('[name="Password"]').type(password);
      cy.get('button[type="submit"]').click();
    });
  }

  // ============ Assertions ============

  /**
   * Verify page has loaded successfully
   */
  verifyPageLoaded() {
    cy.origin('https://login.troostwijkauctions.com', () => {
      cy.get('[name="Email Address"]').should('be.visible');
      cy.get('[name="Password"]').should('be.visible');
    });
  }

  /**
   * Verify error message for incorrect password
   */
  verifyIncorrectPasswordError() {
    cy.origin('https://login.troostwijkauctions.com', () => {
      cy.get('form#localAccountForm > div[role="alert"] > p').should('have.text', 'Your password is incorrect.');
    });
  }
}

export default SignInPage;
