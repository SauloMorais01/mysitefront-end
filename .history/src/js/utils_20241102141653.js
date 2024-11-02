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

    /**
     * @returns {void}
     */
    showMenu() {
        this.btnMenuRoot.onclick = () => {
            if(this.menuHoverRoot.classList.contains('hidden')) {
                return this.menuHoverRoot.classList.remove('hidden menuAnimation');
            } else {
                return this.menuHoverRoot.classList.add(`hidden menuAnimation`);
            }
        }
    }
}