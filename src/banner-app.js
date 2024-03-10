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
    this.message = "something";
    
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        --display-mode: unset;
        --display-mode-opposite: none;
        --min-banner-height: 30px;
        min-height: var(--min-banner-height);
        overflow: hidden;
        --inside-color: #378683;
        flex-direction: column;
      
      }

       :host([sticky]) {
        position: sticky;
        top: 0;
        z-index: 9999;
      } 

      :host([status = "notice"]) {
        --background-color: #CFECEB;
        --inside-color: #FFFFFF;
        
      }

      :host([status = "warning"]) {
        --background-color: #bf8226;
        --inside-color: #FAC230;

      }

      :host([status ="alert"]) {
        --background-color:#c0250d;
        --inside-color: #e9453f;
         
      }


      .maincontainer{
        width: 100%;
        //height: 30px;
        //top: 0px;
        background-color: var(--background-color);
        border: 8px;
        margin: 8px;
        display: inline flex;
       // position: relative;
        //justify-content: center;
        //align-items: center;
        flex-direction: column;
        min-height: var(--min-banner-height);
        
    
      }

      .date {
        color: white;
        margin-left: 16px;
        padding: 16px;
        display: var(--display-mode);
        font-weight: bold;

        
      }


      .infoContainer{
        background-color: var(--inside-color);
        width: 90%;
       // height: 100px;
        //text-align: left;
        transform: skew(20deg);
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        //align-items: center;
        //position: relative;
        align-items: flex-start;
        display: var(--display-mode);
        margin: -5px 20px 0px 20px;
        
        
      }

      .infoinside{
        transform: skew(-20deg);
        font-weight: bold;
        position: relative;
        display: flex;
        align-items: flex-start;

      }

      .exclamation{
        margin-top: 24px;
       
      }

      .messageInfo{
        align-items: left;
        top: 0px;
        padding: 24px;
        display: flex;
        width: 100%;
        box-sizing: border-box;
        margin-left: 24px;
        
      }

      .closeit button{
        
        background-color: transparent;
        border: none;
        display: var(--display-mode);
        color: white; 
        font-weight: bold;
        margin-left:auto;
  
      }

      .opencontainer{
        display: var(--display-mode-opposite);
      }
      
      .openit button{
        background-color: var(--background-color);
        border: none;
        color: black;
        font-weight: bold;
        font-size: 20px;
        padding: 8px;
        position: relative;
        
      }
      

      .header{
        width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: 8px;
        display: flex;
        padding: 6px 6px 0px 6px;
      }
      
  `;
  }

  
  render() {
    return html`

    <div class= "maincontainer">
      <div class="opencontainer">
        <span class="openit">
          <button class="openthis" @click="${this.openAll}"> TEST CAMPUS ALERT  V </button>
          </span>
          </div>
          
          <div class =" header">
          <div class = "date">
            ${this.date}
          </div>
          <span class= "closeit">
            <button id="closethis" @click="${this.closeAll}">✕ Close</button>
  </span>
  </div>

          <div class = "infoContainer">
            <div class ="infoinside">

            <div class ="exclamation">
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
          </div>
        
          <div class = "messageInfo" >
          ${this.message}
          </div>
          </div>
          </div>
          </div>
          


    </div>
    
    
    `;

  }

  openAll(){
    this.opened= true;
    console.log("opened");
    this.style.setProperty('--display-mode', 'unset');
    this.style.setProperty('--min-banner-height', '30px');
    this.style.setProperty('--display-mode-opposite', 'none');
  }

  closeAll(){
    this.opened= false;
    console.log("closed");
    this.style.setProperty('--display-mode', 'none');
    this.style.setProperty('--min-banner-height', '30px');
    this.style.setProperty('--display-mode-opposite', 'flex');
  
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