import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {

  static get tag() {
    return 'banner-app';
  }
  
  constructor() {
    super();
    this.counter = 5;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrapper{
        background-color: blue;
      }

      .banner{
        position: relative;
        width: 100%;
        height: 10vh;
        
    

      }
       

  `;
  }

  
  render() {
    return html`
    <div class="wrapper">
        <div class="banner">
  
  
  
    </div>
    </div>
   
    
    `;

  }
  
  

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      min: {type: Number },
      max: {type: Number },
    };
  }
}


globalThis.customElements.define(BannerApp.tag, BannerApp);