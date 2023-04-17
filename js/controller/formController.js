/*
 *form application controller class.  
 * main branch of communication between the model, view and the user of the form
 */
export class formController {

    /**
     * Class constructor
     * @param {type} model -  creates the model that interacts with the controller 
     * @param {type} view  -  creates the view that interacts with the controller
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());

        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        this.view.form.addEventListener('submit', this.handleFormSubmit);



    }

    /**
     * updates the model
     * @param {type} event 
     */
    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
    }

    /**
     * prevents default action of submitting the form
     * @param {type} event 
     */
    handleFormSubmit = (event) => {
        this.validateForm;
        event.preventDefault();
        this.model.persist();

        this.view.finalMessage();
    }





}