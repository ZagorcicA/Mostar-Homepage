/**
 * application view
 * displays the information to the user, communicates with controller
 */
export class postcardView {

    /**
     * constructor
     */
    constructor() {
        this.postcardForm = document.querySelector("#form-postcard");
        this.selectsDiv = document.querySelector("#div-selects");
        this.selects = null;
        this.postcardDiv = document.querySelector("#div-postcard");
    }


    /**
     * Rendering HTML select elements.
     * @param {Array} selectIDs - string array of select IDs
     */
    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.setAttribute("name", name);
            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });

        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    /**
     * reseting all next selects
     * @param {type} selectID 
     */
    resetNextSiblings(selectID) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }
    }


    /**
     * adding options to select
     * @param {String} selectID 
     * @param {Array} options 
     */
    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;
        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    /**
     * rendereing image based on current select values
     * @returns {undefined}
     */
    renderPostcard() {
        let imgSrc = 'Media/js/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png';

        this.postcardDiv.querySelector('img').src = imgSrc;

    }

}