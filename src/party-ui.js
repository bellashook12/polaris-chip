import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";


export class PartyUI extends DDD {

  static get tag() {
    return 'party-ui';
  }
  
  constructor() {
    super();
    this.items = [];
    
   
  }

  add(e){

  }


  static get styles() {
    return css`
      :host {
        display: inline-flex;
        
      }

      .background1{
        background-color: var(--ddd-theme-default-beaver70);
        padding: 8px;
        margin: 75px;
        display: flex;
        align-items: center;
        flex-direction: column;
        

        
      }

      .background2 {
        background-color: var(--ddd-theme-default-beaverBlue);
        padding: 150px 250px;
        margin-bottom: -8px;
        

      }

      .adduser{
        border: 1px dashed black; 
        background-color: transparent;
        
        font-size: 24px;
        font-family: var(--ddd-font-primary-bold);
        
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        margin-left: 16px;
        
       
      }

      .characterlist{
        
        display: flex;
      }

      .yourname{
        color: white;
        font-family: var(--ddd-font-primary-bold);

      }

      .namespace{
        border-top: 3px solid var(--ddd-theme-default-accent);
        margin: 0px 18px;
        text-align: center;
        font-family: var(--ddd-font-primary-bold);
      }
      
      .characters{
        text-align: center; 

      }

      .adduser:hover,
      .adduser:focus{
        background-color: var(--ddd-theme-default-navy40);

      }



  `;
  }


  






  

  render() {
    return html`
    <div class= "wrapper">
      <div class= "background1">
        <div class= "background2">
          <div class="characterlist">
            <div class= "characters">
            <rpg-character hat= "random" seed="yourcharacter"></rpg-character>
            <div class ="yourname">YOU</div>
            <div class="namespace"></div>
            </div>

             <button @click="${this.adduser}" class= "adduser"><rpg-character></rpg-character>Add User + </button>

          </div>
        </div>
      </div>
    </div>

    
    `;

  }






  static get properties() {
    return {
      items: { type: Array },
            
      
    };
  }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);