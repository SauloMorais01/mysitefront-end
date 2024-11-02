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
                this.menuHoverRoot.classList.remove('hidden');
                this.menuHoverRoot.classList.add('menuAnimation');
                this.menuHoverRoot.classList.remove('menuAnimationReverse');
            } else {
                this.menuHoverRoot.classList.remove('menuAnimation');
                this.menuHoverRoot.classList.add('menuAnimationReverse');
                let interval = document.setTimeout(() => {
                    this.menuHoverRoot.classList.add(`hidden`);
                }, 1000);
            }
        }
    }
}