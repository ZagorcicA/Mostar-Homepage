/**
 * Form application model. contains data and the information
 * regarding posctard that is the type, color and motive of the postcard
 */
export class formModel {


    /**
     * constructor
     */
    constructor() {
        this.name = "";
        this.email = "";

        this.init();
    }

    /**
     * initilazes object propreties
     */
    init() {
        let postcard = JSON.parse(localStorage.getItem('postcard'));
        for (let property in postcard) {
            this[property] = postcard[property];
        }
    }

    /**
     * converting object to data object for view to use
     * @returns {undefined}
     */
    getInputData() {
        let inputsString = JSON.stringify(this);
        return JSON.parse(inputsString);
    }

    /**
     *  stores data to local storage
     */
    persist() {
        localStorage.setItem('postcard', JSON.stringify(this));
    }


}