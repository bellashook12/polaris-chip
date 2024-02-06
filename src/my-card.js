import { LitElement, html, css } from 'lit';

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
  background-color:blue !important;
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

  `;
  }
  render() {
    return html`
    <div class="card-background">
      <h1 class="card-title">${this.title}</h1>
      <img class="card-image" src=${this.img} alt="penn state logo">
      <p>${this.paragraph}</p>

      <div class="btn-things">
          <a href="https://hax.psu.edu">
            <button class="btn">${this.buttontitle}</button>
          </a>
      <div class="control-wrapper">
    <button class="duplicate">Clone Card</button>
    <button id="changetitle">Change title</button>  
    <button id="changeimage">Change image</button>
    <button id="changebg">Change background</button>
    <button id="delete">Delete card</button>
    </div>
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

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

//<img class="card-image" src=${this.img} alt="penn state logo">