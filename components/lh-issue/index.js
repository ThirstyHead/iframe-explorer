class LhIssue extends HTMLElement{
    constructor(){
      super();
      this.LIGHTHOUSE = undefined;
      this.listener = this.lighthouseListener.bind(this);

      this.title = 'title';
      this.description = 'description';
    }
  
    connectedCallback(){      
      let shadowRoot = this.attachShadow({mode:'open'});
      shadowRoot.appendChild(this.styleBlock);
      shadowRoot.appendChild(this.bodyBlock);

      window.addEventListener("LighthouseUpdate", this.listener);
      console.log('connectedCallback');
    }

    lighthouseListener(event){
        this.LIGHTHOUSE = window.__LIGHTHOUSE_JSON__;
        //console.log(this.LIGHTHOUSE.audits[this.rule].title);
        this.title = this.LIGHTHOUSE.audits[this.rule].title;
        this.description = this.LIGHTHOUSE.audits[this.rule].description;
    }
  
    get rule(){
        return this.getAttribute('rule');
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
        <p>Source: Lighthouse</p>
        <p>${this.title}</p>
        <p>${this.description}</p>
      `;
  
      return bodyBlock;
    }
  }
  
  window.customElements.define('lh-issue', LhIssue);