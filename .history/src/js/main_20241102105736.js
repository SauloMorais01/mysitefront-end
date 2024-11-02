class Main {
    constructor() {
        this.btnMenu = document.getElementById('hover-btn')
        this.utils = new Utils()
    }

    /**
     * @param {HTMLElement} root 
     */
    set btnMenu(root) {
        return this._menuBtn = root;
    }
        
    /**
     * @returns {HTMLElement} btnMenu
     */
    get btnMenu() {
        return this._menuBtn
    }

    /**
     * @param {HTMLElement} root 
     */
    set hoverMenu(root) {
        return this._hoverMenu = root;
    }
        
    /**
     * @returns {HTMLElement} hoverMenu
     */
    get hoverMenu() {
        return this._hoverMenu
    }


    update() {

    }
}