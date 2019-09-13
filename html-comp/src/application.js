export class Application {
    root = null;
    title = 'Web Components';
    container = null;
    errorMode = false;
    loadedApp = null;

    bootstrap(root) {
        this.root = root;
         

        this.root.innerHTML = `
            <div class="row">
                <h1></h1>
            </div>
            `;

    }

    
}

export function render(Component, element) {
    const component = new Component();
    component.bootstrap(element);
}
