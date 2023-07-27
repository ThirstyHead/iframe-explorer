class LhIssue extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      let shadowRoot = this.attachShadow({mode:'open'});
      shadowRoot.appendChild(this.styleBlock);
      shadowRoot.appendChild(this.bodyBlock);
    }

    get styleBlock(){
      let styleBlock = document.createElement('style');
      styleBlock.innerHTML = `

      `;
  
      return styleBlock;
    }
  
    get bodyBlock(){
      let bodyBlock = document.createElement('div');

      bodyBlock.innerHTML = `
        <p class="source">Source: Lighthouse</p>
        <p class="title">title</p>
        <p class="description">description</p>
        <p class="score">score</p>
      `;
  
      return bodyBlock;
    }
  }
  
  window.customElements.define('lh-issue', LhIssue);