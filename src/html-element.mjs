import { DOMRect } from './dom-rect.mjs';

class HTMLElement {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    addEventListener() {

    }

    getBoundingClientRect() {
        return new DOMRect(0, 0, this.width, this.height);
    }

    removeEventListener() {

    }
}

export { HTMLElement };
