/**
 * form application view
 * displays the information to the user, communicates with controller
 */
export class formView {


    /**
     * constructor
     */
    constructor() {
        this.inputs = null;
        this.form = document.querySelector("#form-postcard-name");
        this.finalMess = document.querySelector("#finalMess");
    }

    /**
     * creating inputs based on JS object with data
     * @param {Object} dataObject 
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend',
                `<p>${property}
                        <input name='${property}' 
                               value='${dataObject[property]}' 
                               type='text' size='30'/>
                     </p>`);
        }
        this.inputs = this.form.querySelectorAll('input[type=text]');
    }


    /**
     * method to hide the form and display the final goodbye message
     */
    finalMessage() {
        this.form.style.display = 'none';
        this.finalMess.style.display = "block";
    }

}