class Main {
    constructor() {
        this.utils = new Utils()
    }

    /**
     * @param {HTMLElement} root 
     */
    set btnMenu(root) {
        return this._menuBtn = root;
    }

    get btnMenu() {
        return this._menuBtn
    }

    update() {

    }
}