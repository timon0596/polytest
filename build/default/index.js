import { PolymerElement, html } from "./node_modules/@polymer/polymer/polymer-element.js";

class IconToggle extends PolymerElement {
  static get template() {
    return html`
    <style>
            .test{
              max-width: 1000px;
                  width: 100%;
                  height: 300px;
                  background: #fff;
                  box-sizing: border-box;
            }
            canvas {
              background: #eee;
              width: 100%;
              height: 100%; }

            .mainWrapper {
              display: grid;
              width: 100%;
              height: 100%;
              grid-template-rows: 1fr auto auto auto; }

            .canvasWrapper {
              align-self: stretch;
              position: relative;
              display: grid;
              align-self: start;
              width: 100%;
              height: 100%; }

            .nameY {
              margin-top: 30px; }

            .nameX {
              position: absolute;
              right: 0;
              bottom: 0; }

            .slider {
              position: relative;
              display: block;
              height: 10px;
              width: 100%; }

            .chunkHandle {
              position: absolute;
              left: 0;
              top: 0;
              height: 10px;
              background: #000;
              opacity: 0.5;
              cursor: pointer; }

            .handle {
              position: absolute;
              left: 0;
              top: 0;
              height: 10px;
              width: 30px;
              background: #000;
              transform: translate(-50%, 0);
              opacity: 0.5;
              cursor: pointer; }

            .handle:last-child {
              left: 100%; }

            .tip {
              display: block;
              position: fixed;
              right: 0;
              top: 0;
              width: -webkit-min-content;
              width: -moz-min-content;
              width: min-content;
              background: white;
              transform: translate(0, -100%); }

            .chartnames {
              display: grid;
              grid-gap: 10px;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              width: 100%; }

            .chartname {
              display: grid;
              grid-auto-flow: column;
              grid-gap: 5px;
              align-items: center;
              justify-content: center;
              width: auto; }
              .chartname__color {
                display: block;
                width: 10px;
                height: 10px; }


            /*# sourceMappingURL=main1.81e3b6ae533ba25e635a.css.map*/
          </style>

      <div class='test'></div>
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      isFullDiapason: {
        type: String
      }
    };
  }

  ready() {
    super.ready();
    const sr = $(this)[0].shadowRoot;
    console.log($(sr).find('.test'));
    $(sr).find('.test').myChart({ ...this.newConfig(),
      diapason: {
        full: JSON.parse(this.isFullDiapason)
      }
    });
  }

  newConfig(num = 1234) {
    const new_config = {
      title: 'monthly average temperature',
      diapason: {
        full: false
      },
      x: {
        categories: new Array(num).fill(0).map((el, i) => i + 1),
        title: 'indexes'
      },
      y: {
        title: 'temperature'
      },
      series: [{
        name: 'qwer',
        data: new Array(num).fill(0).map(() => (Math.random() * 100).toFixed(2) * 10)
      }]
    };
    return new_config;
  }

}

customElements.define('icon-toggle', IconToggle);