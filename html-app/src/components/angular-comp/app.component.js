export class AppComponent {
    static component = {
        template: `
        <user-list></user-list>
        `,
        controller: AppComponent,
    };

    static $inject = ['$http', 'config'];

    hello = 'Angular Web Component';

    clickItem(){

        loadComponent('./components/angular-comp.html').then( ( html ) => {
            console.log(html);
            //const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = html.document.querySelector('#people-list-template');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        });


        //const shadowRoot = this.attachShadow({ mode: 'open' });
            //const template = document.querySelector('#people-list-template');
            //const placeHld = document.querySelector('#placeholder');
            //placeHld.innerHTML='<h1>testing </h1>';
            
            //const instance = template.content.cloneNode(true);
            //shadowRoot.appendChild(instance);
        alert('dsds');
    };

    constructor($http, config) {
        this.$http = $http;
        this.config = config;
    }
}
