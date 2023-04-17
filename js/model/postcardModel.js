import { selectData } from '../store/selectData.js';

/**
 * Postcard application model. contains data and the information
 * regarding posctard that is the type, color and motive of the postcard
 */
export class postcardModel {
    // external file of data structure
    static store = selectData;


    /**
     * constructor
     */
    constructor() {
        this.type = "undefined";
        this.color = "undefined";
        this.motive = "undefined";

    }

    /**
     * returns properties names
     * @returns {Array} - object that is representing the posctcard model
     */
    getProperties() {
        return Object.keys(this);
    }


    /**
     * retrieving data from external source, selectData in this case
     * @param {String} selectID - select ID
     * @returns {Array} - string array of select options
     */
    getOptions(selectID) {
        let options;
        switch (selectID) {
            case 'type':
                options = Object.keys(postcardModel.store);
                // ["circle", "rectangle"]
                break;
            case 'color':
                options = Object.keys(postcardModel.store[this.type]);
                // ["white", "red"]} OR ["white", "black"]
                break;
            case 'motive':
                if (this.type === "circle") {
                    options = Object.keys(postcardModel.store[this.type][this.color]);
                    // ["mosque", "church"]} OR ["gimnazija", "old bridge"]
                } else if (this.type === "rectangle") {
                    options = Object.keys(postcardModel.store[this.type][this.color]);
                    // ["bruceLee", "grandma"]} OR ["gimnazija", "old bridge"]

                } break;
        }

        return options;
    }


    /**
     * reseting propreties to undefined
     * @param {type} property 
     */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }
    }

    /**
     * stores data to local storage
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('postcard', JSON.stringify(this));

    }




}