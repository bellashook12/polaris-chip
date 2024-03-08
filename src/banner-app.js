import { LitElement, html, css } from 'lit';

export class BannerApp extends LitElement {

  static get tag() {
    return 'banner-app';
  }
  
  constructor() {
    super();
    this.sticky = false;
    this.status = "notice";
    this.date = "NOVEMBER 17, 2023 12:00 AM";
    this.opened = true;
    this.message = "";
    
    
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        --display-mode: unset;
        --display-mode-opposite: none;
        --min-banner-height: 20vh;
        min-height: var(--min-banner-height);
        

      }

       :host([sticky]) {
        position: sticky;
        top: 0;
        z-index: 9999;
      } 

      :host([status = "notice"]) {
        --background-color: blue;
        
      }

      :host([status = "warning"]) {
        --background-color: #bf8226;
        
      }

      :host([status ="alert"]) {
        --background-color:#c0250d;
        
      }


      .maincontainer{
        width: 100%;
        height: 150px;
        top: 0px;
        background-color: var(--background-color);
        border: 8px;
        margin: 8px;
      }

      .date {
        color: white;
      }

     

      
      
       
  `;
  }

  
  render() {
    return html`

    <div class= "maincontainer">
      <div class="opencontainer">
        <span class="openit">
          <button id="openthis" @click="${this.openAll}"> TEST CAMPUS ALERT </button>
          </span>
          </div>

          <div class = "date">
            ${this.date}
          </div>

    
          <svg height ="32px" width ="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" class="alert-icon">
            <g transform="translate(-350.099 -428.714)">
              <g transform="translate(350.099 428.714)" fill="none" stroke-width="6">
                <circle cx="41" cy="41" r="41" stroke="black"></circle>
                <circle cx="41" cy="41" r="38" fill="none"></circle>
              </g>
              <g transform="translate(384.41 448.566)">
                <rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect>
                <path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)"></path>
              </g>
            </g>
          </svg>
        
          <div class = "messageInfo" >
          ${this.message}
          </div>

          <span class= "closeit">
            <button id="closethis" @click="${this.closeAll}">✕ Close</button>
  </span>





    </div>
    
    
    `;

  }

  openAll(){
    this.opened= true;
    console.log("opened");
    this.style.setProperty('--display-mode', 'unset');
    this.style.setProperty('--display-mode-opposite', 'none');
    this.style.setProperty('--min-banner-height', '20vh');
  }

  closeAll(){
    this.opened= false;
    console.log("closed");
    this.style.setProperty('--display-mode', 'none');
    this.style.setProperty('--display-mode-opposite', 'none');
    this.style.setProperty('--min-banner-height', '6vh');
  }
  
  

  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
      status: { type: String, reflect: true },
      sticky: { type: Boolean, reflect: true },
      date: { type: String, reflect: true },
      message: { type: String, reflect: true },
    
    };

   

  }
}

globalThis.customElements.define(BannerApp.tag, BannerApp);