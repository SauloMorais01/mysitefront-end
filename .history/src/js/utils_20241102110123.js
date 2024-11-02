class MenuController {
    /**
     * @param {HTMLElement} btnMenu
     * @param {HTMLElement} menuHover 
     */
    constructor(btnMenu, menuHover) {
        this.btnMenuRoot = btnMenu
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
     * @returns {HTMLElement} btnMenu
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

    showMenu() {

    }
}