class Utils {
    /**
     * @param {HTMLElement} menuHover 
     */
    constructor(btnMenu, menuHover) {
        this.menuHoverRoot = menuHover;
    }

    /**
     * @returns {HTMLElement} menuHover
     */
    get menuHoverRoot() {
        return this._menuHover
    }
    
    /**
     * @param {HTMLElement} root
     */
    set menuHoverRoot(root) {
        return this._menuHover = root;
    }

    /**
     * @returns {HTMLElement} menuHover
     */
    get btnMenuRoot() {
        return this._btnMenu
    }
    
    /**
     * @param {HTMLElement} root
     */
    set btnMenuRoot(root) {
        return this._btnMenu = root;
    }
}