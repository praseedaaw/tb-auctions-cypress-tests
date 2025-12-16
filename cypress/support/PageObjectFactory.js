/**
 * Factory for creating page objects
 * Implements dependency injection pattern for better resource management
 */

import Constants from './Constants';
import BasePage from '../page_objects/BasePage';
import {
  SignInPage,
  HomePage,
  AuctionPage,
  AllAuctionsPage,
  ObjectDetailsPage
} from '../page_objects/pages';
import CommonDialogsPage from '../page_objects/common/CommonDialogsPage';

class PageObjectFactory {
    /**
     * Create page object instance based on type
     * @param {string} pageType - Type of page object to create
     * @returns {Object} Page object instance
     */
    static create(pageType) {
                switch (pageType) {
            // Base and common objects
            case Constants.PAGE_TYPES.BASE_PAGE:
                return new BasePage();
            case Constants.PAGE_TYPES.COMMON_DIALOGS:
                return new CommonDialogsPage();
            
            // Page objects
            case Constants.PAGE_TYPES.SIGNIN:
                return new SignInPage();
            case Constants.PAGE_TYPES.HOME:
                return new HomePage();
            case Constants.PAGE_TYPES.ALL_AUCTIONS:
                return new AllAuctionsPage();
            case Constants.PAGE_TYPES.AUCTION:
                return new AuctionPage();
            case Constants.PAGE_TYPES.OBJECTDETAILS:
                return new ObjectDetailsPage();
        
            
            default:
                throw new Error(`Unknown page type: ${pageType}. Available types: ${Object.values(Constants.PAGE_TYPES).join(', ')}`);
        }
    }

    /**
     * Get list of available page types
     * @returns {string[]} Array of available page types
     */
    static getAvailableTypes() {
        return Object.values(Constants.PAGE_TYPES);
    }

    /**
     * Validate if page type exists
     * @param {string} pageType - Page type to validate
     * @returns {boolean} True if page type is valid
     */
    static isValidPageType(pageType) {
        return Object.values(Constants.PAGE_TYPES).includes(pageType);
    }
}

export default PageObjectFactory;