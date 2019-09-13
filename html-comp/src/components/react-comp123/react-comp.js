import "./react-comp.css"
const currentDocument = document.currentScript.ownerDocument;
class ReactComponent extends HTMLElement {
    constructor(){
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `<h1>React Comp Shell!</h1>`;
        /*
        loadComponent('./components/sample-comp.html').then( ( html ) => {
            console.log(html);
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = html.document.querySelector('#sample-comp-template');
            const instance = template.content.cloneNode(true);
            shadowRoot.innerHTML = `<h1>Sample Comp!</h1>`;
            shadowRoot.appendChild(instance);
        });
        */
        
    }

    disconnectedCallback() {
        
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        
    }
}
customElements.define('react-comp', ReactComponent);