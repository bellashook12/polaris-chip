import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }
  
  constructor() {
    super();
    this.counter = 5;
    this.min= 12;
    this.max= 32;
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrapper{
        background-color: #f1cbff;
        height: 224px;
        width: 224px;
        border: 8px;
        margin: 16px;
        display: block;
      }

      h1{
        font-size:48px;
        text-align: center;
        padding: 8px;
        color: black;
        margin-bottom: 10px;
      }

      .main-number{
        text-align: center;
        font-size: 60px;
        padding: 12px;
        color: black;
      }

      .btn{
        text-align: center;
      }

    .increment:focus,
    .increment:hover {
      background-color: #97c1a9;
    } 

    .decrement:focus,
    .decrement:hover {
      background-color: #ffbdbd;
    } 

    :host([counter="18"]) .main-number{
      color:#3366ff;
    }

    :host([counter="21"]) .main-number{
      color: #ff00c1;
    }

  `;
  }

  incrementOne(){
    this.counter+=1;
  };

  decrementOne(){
    this.counter-=1;
  };

  render() {
    return html`
    <style>
      :host([counter="${this.min}"]) .main-number{
      color: white;
    }
    :host([counter="${this.max}"]) .main-number{
      color: red;
    }
    </style>  
    <confetti-container id="confetti">    
    <div class="wrapper">
    <h1> Counter </h1>
    <div class="main-number">${this.counter}</div> 
      <div class="btn">
      <button class="increment" @click="${this.incrementOne}" ?disabled="${this.counter === this.max}"> + </button>
      <button class="decrement" @click="${this.decrementOne}" ?disabled="${this.counter === this.min}"> - </button>
      </div>

    </div>   
  </div>
  </confetti-container>
    `;

  }

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter === 21) {
        this.makeItRain();
      }
    }
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
      }
    );
  }

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      min: {type: Number },
      max: {type: Number },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);