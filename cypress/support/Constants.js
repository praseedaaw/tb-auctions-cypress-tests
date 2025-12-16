/**
 * Constants class for centralized configuration values
 * Contains page types, test data constants, and other framework-wide values
 */
class Constants {
    /**
     * Page Object Types - Used by PageObjectFactory and test specifications
     */
    static PAGE_TYPES = {
        // Base and Common Components
        BASE_PAGE: 'basePage',
        COMMON_DIALOGS: 'commonDialogs',
        
        // Application Pages
        SIGNIN: 'signIn',
        HOME: 'home',
        ALL_AUCTIONS: 'allAuctions',
        AUCTION: 'auction',
        OBJECTDETAILS: 'objectDetails',
        
    };
}

export default Constants;