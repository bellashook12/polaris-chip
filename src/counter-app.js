import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }
  

  constructor() {
    super();
    this.title = "Welcome";
    this.buttontitle = "Details";
    this.paragraph = "One of Penn State's logos"
    this.img = "https://www.computersciencedegreehub.com/wp-content/uploads/2019/07/pennsylvania-state-university-300x296.png"
    this.fancy = false;
    //this.top = "I bring you";
    //this.bottom= "the death";
  }




  static get styles() {
    return css`
      :host {
        display: block;
      }

  .card-background{
    background-color: lightblue;
    padding: 72px;
    margin: 16px;
    border-radius: 28px;
    width: 400px;
  }

  .btn{
  font-size: 30px;
  top: 550px;
  left: 515px;  
  border-radius: 20%; 
  }

  .change-color{
  background-color:red !important;
}

.btn:focus,
.btn:hover {
  background-color: lightgreen;
}

p,h1{
  color:black;
  text-align:center;
}
p{
  font-size:25px;
}
h1{
  font-size:50px;
}
.btn-things{
  margin:16px;
  padding:8px;
  text-align:center;
}

img{
  width:200px;
  height:200px;
  border-radius: 20px;
  display:block;
  margin-left:auto;
  margin-right:auto;
}

@media screen and (min-width: 500px) and (max-width: 800px){
  .btn-things{
    display:block;
  }
}

@media screen and (max-width: 500px) {
  img {
    width: 100px;
  }
  p {
    font-size: 20px;
  }
}

    :host([fancy]) {
    display: block;
      background-color: navy;
      border: 2px solid aqua;
      box-shadow: 10px 5px 5px blue;
    }

    details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

  `;
  }


  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  //<slot>${this.paragraph}</slot>
  render() {
    return html`
    
    <div class="card-background">
      <h1 class="card-title">${this.title}</h1>
      <meme-maker alt="Cat stalking a small toy" image-url=${this.img} top-text="I bring you" bottom-text="the death">
      </meme-maker>
      <p>${this.paragraph}</p>
      
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot><p>${this.paragraph}</p></slot>
        </div>
      </details>
      
      
      
      <div class="btn-things">
          <a href="https://hax.psu.edu">
            <button class="btn">${this.buttontitle}</button>
          </a>
    </div>
    </div> 
  
    `;

  }
//i think button class instead of id 
//put buttons on in index.html - not in card i think 

  static get properties() {
    return {
      title: { type: String },
      buttontitle: { type: String },
      paragraph: { type: String },
      img: { type: String },
      fancy: { type: Boolean, reflect: true },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);



//<meme-maker class="card.image" src=${this.img} alt="penn state logo">
  //   <p>${this.paragraph}</p></meme-maker>

  //this.img = "https://www.computersciencedegreehub.com/wp-content/uploads/2019/07/pennsylvania-state-university-300x296.png"
