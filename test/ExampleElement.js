import ElementForge, { BaseElement } from '../src';

class Example extends BaseElement {
    static get name() {
        return 'example-greeter';
    }

    static get propDefs() {
        return [
            {
                name: 'name',
                validate: v => typeof v === 'string',
            },
        ];
    }

    constructor() {
        super();

        this.state = {
            name: 'world',
        };
    }

    build(context) {
        super.build(context);
        if (context.element.hasAttribute('name')) this.state.name = context.element.getAttribute('name');

        this.label = document.createElement('span');
        this.label.innerText = this.state.name;

        context.element.appendChild(this.label);
    }

    onPropChange(propName, newValue) {
        super.onPropChange(propName, newValue);


        switch (propName) {
            case 'name':
                this.state.name = newValue;
                break;
            default:
                break;
        }
    }

    update() {
        super.update();

        this.label.innerText = this.state.name;
    }
}

ElementForge.registerElement(Example);