import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {

  static get tag() {
    return 'banner-app';
  }
  
  constructor() {
    super();
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

       .wrapper{
        min-height: 100vh;
        
      } 

      .banner{

        width: 100%;
        height: 20vh;
        position: sticky;
        top: 0px;
        background-color: blue;
      }
      
      p{
        color:white;
      }

      
       

  `;
  }

  
  render() {
    return html`
    <div class="wrapper">
        <div class="banner">
        <p> trial</p>
  
  
  
    </div>
    </div>
   
    
    `;

  }
  
  

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
    
    };
  }
}


globalThis.customElements.define(BannerApp.tag, BannerApp);