import BaseElement from './BaseElement';

export default {
    BaseElement,
    elementPrefix: null,
    registerElement(elementBase) {
        const fullName = !!this.elementPrefix ? `${this.elementPrefix}-${elementBase.name}` : elementBase.name;

        window.customElements.define(fullName, class extends HTMLElement {
            static get observedAttributes() {
                return elementBase.propDefs.map(it => it.name);
            }

            constructor() {
                super();

                this.base = new elementBase();
                this.rendered = false;

                this.base.build({
                    element: this,
                });

                this.base.update();
            }

            connectedCallback() {
                if (!this.rendered) {
                    this.base.update();
                    this.rendered = true;
                }
            }

            attributeChangedCallback(name, oldValue, newValue) {
                const matchingPropDefs = elementBase.propDefs.filter(it => it.name === name);
                if (matchingPropDefs.length === 0) return;

                const propDef = matchingPropDefs[0];

                if (!propDef.validate(newValue)) return;

                this.base.onPropChange(name, newValue);
                this.base.update();
            }
        });
    }
};