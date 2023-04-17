/**
 * app.js, class
 * Applications main branch of communication with the MVC
 */
import { postcardView } from './view/postcardView.js';
import { postcardController } from './controller/postcardController.js';
import { postcardModel } from './model/postcardModel.js';

import { formView } from './view/formView.js';
import { formController } from './controller/formController.js';
import { formModel } from './model/formModel.js';
class App {

    /**
     * constructor
     */
    constructor() {
        const url = window.location.href;
        const page = url.match(/[a-z]+.html/)[0]; // returns array of matches


        switch (page) {
            case 'index.html':
                new postcardController(new postcardModel(), new postcardView);
                break;
            case 'form.html':
                new formController(new formModel(), new formView());
                break;
        }
    }
}

const app = new App();