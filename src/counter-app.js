import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }
  
  constructor() {
    super();
    this.counter = "0";
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
      }

      .main-number{
        text-align: center;
        font-size: 40px;
        padding: 16px;
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

  `;
  }

  render() {
    return html`
    <div class="wrapper">
    <h1 class="title"> Counter </h1>
    <div class="main-number">${this.counter}</div> 
      <div class="btn">
      <button class="increment"> + </button>
      <button class="decrement"> - </button>
      </div>

    </div>   
  </div>
    `;

  }

  static get properties() {
    return {
      counter: { type: String },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);