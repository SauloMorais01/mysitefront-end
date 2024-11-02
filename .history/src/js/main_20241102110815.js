class Main {
    constructor() {
        this.btnMenu = document.getElementById('hover-btn');
        this.hoverMenu = document.getElementById('modal-mobile-menu');
        this.menuController = new MenuController(this.btnMenu, this.hoverMenu);
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
        this.menuController.showMenu();
    }
}


const app = new Main();