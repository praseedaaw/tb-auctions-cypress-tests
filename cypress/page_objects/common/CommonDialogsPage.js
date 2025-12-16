import BasePage from '../BasePage';

/**
 * Page Object Model for handling common dialogs in Troostwijk website
 */
class CommonDialogsPage extends BasePage {
    constructor() {
        super();
    }

    // ============ Element Selectors ============
    cookieConsentButton() {
        return this.getElement('#onetrust-accept-btn-handler');
    }

    // ============ Actions ============
    acceptCookieConsent() {
        this.getElement('body').then($body => {
            if ($body.find('#onetrust-accept-btn-handler').length > 0) {
                this.cookieConsentButton()
                    .should('be.visible')
                    .click();
            }
        });
    }

    handleInitialDialogs() {
        cy.wait(2000); // Wait for dialogs to appear
        this.acceptCookieConsent();
    }
}

export default CommonDialogsPage;