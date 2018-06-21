import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import firebase from 'firebase';

class HsosWebApp extends PolymerElement {

    constructor() {
        super();
        
        // TODO: Add properties for initializiation
        var app = firebase.initializeApp({ });
        
    }
}

customElements.define('hsos-web-app', HsosWebApp);
