import { DOMRect } from './dom-rect.mjs';

class HTMLElement {
    /** @type {number} */
    width;

    /** @type {number} */
    height;

    /**
     * @param {number} width - The width of the element.
     * @param {number} height - The height of the element.
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    addEventListener() {

    }

    /**
     * @returns {DOMRect} The bounding rectangle of the element.
     */
    getBoundingClientRect() {
        return new DOMRect(0, 0, this.width, this.height);
    }

    removeEventListener() {

    }
}

export { HTMLElement };
