/*
 *application controller class.  
 * main branch of communication between the model, view and the user
 */

export class postcardController {


    /**
     * animal controller.
     * 
     * @param {type} model - The postcardModel 
     * @param {type} view - The Postcardview , controller interacting with both
     * @returns {PostcardController} The object of postcardController.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;


        // 1. rendering all selects
        let properties = this.model.getProperties();
        this.view.renderSelects(properties);

        // 2. populating the first select
        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

        // 3. event handler for events
        this.view.selects.forEach((select) => {
            select.addEventListener('change', this.handleSelectChange);
        });

        // 4. register form submit and reset handler
        this.view.postcardForm.addEventListener('submit', this.handleFormSubmit);



    }


    /** 
     * as change event is triggered, method handles change events that are generated
     * by select
     * @param {type} event
     */
    handleSelectChange = (event) => {

        let select = event.target;
        this.model[select.id] = select.value;


        this.model.resetNextProperties(select.id);
        console.log(this.model);


        /**
         * loads new options to the next select if the current option is not default
         * @param {type} select.id
         */
        this.view.resetNextSiblings(select.id);
        let nextSelect = select.nextElementSibling;
        if (select.selectedIndex > 0 && nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
        }

        // updates postcardDiv
        this.view.renderPostcard();
    }




    /**
     *  prevents default form submit
     * @param {*} event 
     */
    handleFormSubmit = (event) => {

        this.model.persist();
    }


    /**
     * resets the form selects on reset button click
     * @param {*} event 
     */
    handleFormReset = (event) => {
        let select = event.target;

        this.model[select.id] = select.value;

        document.getElementById("form-postcard").reset()
    }

}