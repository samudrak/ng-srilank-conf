export class AppComponent {
    static component = {
        template: `
        <template id="people-list-template">
            <link rel="stylesheet" type="text/css" href="src/components/user-list/user-list.css">
            <div class="people-list__container">
            <ul class="people-list__list"></ul>
            </div>
        </template> 
            <div>
                <h3>Title: {{ $ctrl.config.title }}</h3>
                <p>Greeting: {{ $ctrl.hello }}</p>
            </div>
            <button ng-click='$ctrl.clickItem()' class="card__details-btn">Click</button>
            <div id='placeholder'></div
        `,
        controller: AppComponent,
    };

    static $inject = ['$http', 'config'];

    hello = 'Angular Web Component';

    clickItem(){
        //const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = document.querySelector('#people-list-template');
            const placeHld = document.querySelector('#placeholder');
            placeHld.innerHTML='<h1>testing </h1>';
            
            const instance = template.content.cloneNode(true);
            //shadowRoot.appendChild(instance);
        alert('dsds');
    };

    constructor($http, config) {
        this.$http = $http;
        this.config = config;
    }
}
