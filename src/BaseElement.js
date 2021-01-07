/**
 * A base class for custom element definitions.
 *
 * @author Liz Ainslie
 */
class BaseElement {
    static get name() {};
    static get propDefs() {};

    constructor() {}

    /**
     * Build the structure of this element, and append it to the context.
     *
     * @author Liz Ainslie
     *
     * @param {object} context The context in which this element operates.
     * @param {HTMLElement} context.element The containing element.
     */
    build(context) {};
    onPropChange(propName, newValue) {};
    update() {};
}

export default BaseElement;