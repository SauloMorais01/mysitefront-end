class Utils {
    constructor() {

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
}