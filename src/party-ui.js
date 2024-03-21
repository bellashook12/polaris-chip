import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


  export class PartyUi extends DDD {

  static get tag() {
    return 'Party-Ui';
  }
  
  constructor() {
    super();
   
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .backgroundBox{
        background-color: blue;
        border: 8px;
        margin: 8px;

      }


  `;
  }

  

  render() {
    return html`
    <div class= "backgroundBox">
        </div>



    
    `;

  }

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      
    };
  }
}

globalThis.customElements.define(PartyUi.tag, PartyUi);