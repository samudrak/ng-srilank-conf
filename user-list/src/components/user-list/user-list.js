import "./user-list.css"
const currentDocument = document.currentScript.ownerDocument;


function _createPersonListElement(self, person) {    
    let li = currentDocument.createElement('LI');
    li.innerHTML = person.name;
    li.className = 'people-list__name'
    li.onclick = () => {
      let event = new CustomEvent("PersonClicked", {
        detail: {
          personId: person.id
        },
        bubbles: true
      });
      self.shadowRoot.dispatchEvent(event);
      let eventgloble = new CustomEvent("PersonClickedGloble", {
        detail: {
          personId: person.id
        },
        bubbles: true
      });
      currentDocument.dispatchEvent(eventgloble);
    }
    return li;
    
  }

  class PeopleList extends HTMLElement {
    constructor() {
      // If you define a constructor, always call super() first as it is required by the CE spec.
      super();

      // A private property that we'll use to keep track of list
      let _list = [];

      // Use defineProperty to define a prop on this object, ie, the component.
      // Whenever list is set, call render. This way when the parent component sets some data 
      // on the child object, we can automatically update the child.
      Object.defineProperty(this, 'list', {
        get: () => _list,
        set: (list) => {
          _list = list;
          this.render();
        }
      });
    }

    
    _attachEventListener(self) {
        let personDetail = self;
    
        //Initialize with person with id 1:
        //personDetail.updatePersonDetails(self.peopleList[0]);
        self.parentElement.addEventListener('PersonClickedGloble', (e) => {
            // e contains the id of person that was clicked.
            // We'll find him using this id in the self.people list:
            
           console.log(e.detail);
          })
        self.shadowRoot.addEventListener('PersonClicked', (e) => {
          // e contains the id of person that was clicked.
          // We'll find him using this id in the self.people list:
          
         console.log(e.detail);
        })
      }



      
     _fetchAndPopulateData(self) {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response) => response.text())
          .then((responseText) => {
            const list = JSON.parse(responseText);
            self.list = list;
    
            self._attachEventListener(self);
          })
          .catch((error) => {
            console.error(error);
          });
          
      }
      

    connectedCallback() {
        this.innerHTML = "<h1>User List Shell<h1>"
        
        loadComponent('./components/user-list.html').then( ( html ) => {
            console.log(html);
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = html.document.querySelector('#people-list-template');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        });
        
      // Create a Shadow DOM using our template
      
      this._fetchAndPopulateData(this);
      
    }

    render() {
        
      let ulElement = this.shadowRoot.querySelector('.people-list__list');
      ulElement.innerHTML = '';

      this.list.forEach(person => {
        let li = _createPersonListElement(this, person);
        ulElement.appendChild(li);
      });
      
    }
  }

  customElements.define('user-list', PeopleList);