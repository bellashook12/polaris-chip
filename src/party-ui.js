import { LitElement, html, css } from 'lit';

export class PartyUI extends LitElement {

  static get tag() {
    return 'party-ui';
  }
  
  constructor() {
    super();
   
  }


  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .background1{
        background-color: blue;
        padding: 8px;
        margin: 75px;
        display: flex;
        align-items: center;
      }

      .background2 {
        background-color: lightblue; 
        padding: 150px 250px;
        margin-bottom: -8px;

      }

      .AddUser{
        border: 1px dashed black; 
        background-color: transparent;
        padding: 16px;
      }


  `;
  }

  

  render() {
    return html`
    <div class= "wrapper">
      <div class= "background1">
        <div class= "background2">
          <button class= "AddUser">Add User</button>


        
          </div>
        </div>
      </div>
    </div>

    
    `;

  }

  static get properties() {
    return {
      
      
    };
  }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);