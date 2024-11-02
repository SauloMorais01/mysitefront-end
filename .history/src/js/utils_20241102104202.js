class Utils {
    constructor() {

    }

    get menuHoverRoot() {
        return this._menuHover
    }
    
    /**
     * @param {HTMLElement} root
     * @returns {HTMLBRElement} menuHover
     */
    set menuHoverRoot(root) {
        return this._menuHover = root;
    }
}