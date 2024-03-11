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
    this.message = "important message will go here";
    
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
        --inside-color: #f7fdff;
        
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
        background-color: var(--background-color);
        border: 8px;
        margin: 8px;
        display: inline flex;
        justify-content: space-between;
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
        transform: skew(20deg);
        justify-content: space-between;
        display: flex;
        flex-direction: column;
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
        align-self: center;
      }
      
      .openit button{
        background-color: var(--background-color);
        border: none;
        color: black;
        font-weight: bold;
        font-size: 20px;
        padding: 8px;
        position: relative;
        justify-content: space-between;
      
      }

      .header{
        width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: 8px;
        display: flex;
        padding: 6px 6px 0px 6px;
      }

      .exclamationTwo{
        display: var(--display-mode-opposite);
        align-self: flex-start;
      
      }


      @media screen and (min-width: 320px) and (max-width: 900px){
        .maincontainer{
         max-height: 400px;
        }
    }   
      
  `;
  }

  
  render() {
    return html`

    <div class= "maincontainer">
      <div class="opencontainer">
        <span class="openit">
          <button class="openthis" @click="${this.openAll}"><svg height ="32px" width ="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" class="alert-icon">
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
          </svg> TEST CAMPUS ALERT <svg
      height="14px"
      width="14px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="icon-angle-down"
    >
      <path
        d="M7 10l5 5 5-5z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      ></path>
    </svg>
  </button>
</div>
          <div class =" header">
          <div class = "date">
            <slot>
            ${this.date}
            </slot>
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
          <slot>
          ${this.message}
          </slot>
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
    this.shadowRoot.querySelector('.openit').focus();
  }

  closeAll(){
    this.opened= false;
    console.log("closed");
    this.style.setProperty('--display-mode', 'none');
    this.style.setProperty('--min-banner-height', '30px');
    this.style.setProperty('--display-mode-opposite', 'flex');
    this.shadowRoot.querySelector('.closeit').focus();
  
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