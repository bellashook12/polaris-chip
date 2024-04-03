import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";


export class HaxcmsPartyUI extends DDD {

  static get tag() {
    return 'haxcms-party-ui';
  }
  
  constructor() {
    super();
    this.characters = ["You"];  //array 
    this.numChar = 1; //number of characters 
    this.message=" ";   
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
        padding: var(--ddd-spacing-2);
        margin:  var(--ddd-spacing-18);
        display: flex;
        align-items: center;
        //flex-direction: column;
      }

      .background2 {
        background-color: var(--ddd-theme-default-beaverBlue);
        padding: 100px 100px;
        margin-bottom: -8px;
        flex-direction: row;

      }

      .userlist{
       // border: 1px dashed black; 
        background-color: transparent;
        
        font-size: 24px;
        font-family: var(--ddd-font-primary-bold);
        
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: var(--ddd-spacing-4);
       // margin-left: var(--ddd-spacing-m-4);
        
       
      }

      .characterlist{
        
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
    
      }

      .yourname{
        color: white;
        font-family: "Press Start 2P", system-ui;

      }

      .namespace{
        border-top: 3px solid var(--ddd-theme-default-accent);
        margin: 0px 18px;
        text-align: center;
        font-family: "Press Start 2P", system-ui;
      }
      
      .characters{
        text-align: center; 

      }

       .adduser:hover,
      .adduser:focus{
        background-color: var(--ddd-theme-default-navy40);

      } 

      .adduser{
        background-color: transparent;
        border: dashed 3px;
        font-size: 28px;
        font-family: "Press Start 2P", system-ui;
        margin: var(--ddd-spacing-4);
        padding: var(--ddd-spacing-4);
        display: flex;
        align-items: center;

       
      }

      .removeuser{
        //padding: 16px;
        margin: var(--ddd-spacing-4);
        font-size: 18px; 
        font-family: "Press Start 2P", system-ui;
        background-color: var(--ddd-theme-default-accent);

      }
      .saveuser{
      
        font-size: 18px; 
        font-family: "Press Start 2P", system-ui;
        background-color: var(--ddd-theme-default-accent);

      }

      .namebox{
        padding: var(--ddd-spacing-1);
        font-size: 24px; 
        font-family: "Press Start 2P", system-ui;
        background-color: var(--ddd-theme-default-slateLight);
        width: 350px;
        

      }
      
       .numchar{
        border: white 3px;
        margin: 6px;
        display: flex;
        text-align: center;

      } 

      .saveuserbig{
        // padding: 16px;
        font-size: 18px; 
        font-family: "Press Start 2P", system-ui;
        background-color: var(--ddd-theme-default-roarGolden);
        //color: white;

      } 

      p {
        color: white;
        font-family: "Press Start 2P", system-ui;
        font-size: 24px; 

      }


  `;
  }


  makeItRain() {


    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
        alert(this.message="Party members "+this.characters+ " Added/Saved!"); //alert message will pop up with names and saved 
      }
    );
  }

//adds a character but only adds 4 - 5 in all 
  add(e) {
    if (this.numChar < 5) {
      this.characters.push("");
      this.numChar++;
      this.requestUpdate(); 
      console.log(this.characters); //logs the characters array 
    } 
  }

  //removes a character but only the ones that were added not you
  remove(index) {
    if (this.numChar > 1) {
      this.characters.splice(index, 1); 
      this.numChar--;
      this.requestUpdate(); 
    } 
  }


  //saving the name of a character only lowercase and numbers 
  saveName(e, index) {
    console.log(this.characters);
    const newName = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (newName.trim() !== "") {
      this.characters[index] = newName;
    } else {
      this.characters[index] = "ENTER";
    }
    this.requestUpdate();
  }

  render() {
    return html`
    <div class= "wrapper">
      <div class= "background1">
      <confetti-container id="confetti">  
        <div class= "background2">
          <div class="characterlist">
             ${this.characters.map((player, index) => html`
              <div class= "characters">
                <div class="character-wrapper">
                  <rpg-character seed="${player}"></rpg-character>
                </div>
                <input type="text" class="namebox" .value="${player || 'ENTER'}" @change="${(e) => this.saveName(e, index)}">
                <div class="btn">
                  ${index > 0 ? html`
                      
                      <button @click="${() => this.remove(index)}" class="removeuser">REMOVE</button>
                      ` : ''}
                  </div>
                </div>
              `)}
              <div class= "addbtn"></div> 
              <button @click="${this.add}" class="adduser"><rpg-character></rpg-character>Add User</button>
              <div class="numchar">${this.numChar - 1} <br> Added</div>
            </div>
          <button @click="${this.makeItRain}" class="saveuserbig" >SAVE USER</button>
          <p> ${this.message} </p>
        </div>
        </div>
      </confetti-container>
      </div>
    </div>

    
    `;

  }

  static get properties() {
    return {
      characters: { type: Array },
      numChar: { type: Number, reflext: true},
      message:{type:String,reflect:true},
            
      
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);
//<button @click="${() => this.saveName(index, this.shadowRoot.querySelector(`#name-${index}`).value)}" class="saveuser">SAVE</button>