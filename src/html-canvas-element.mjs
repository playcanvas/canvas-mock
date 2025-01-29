import { CanvasRenderingContext2D } from './canvas-rendering-context-2d.mjs';
import { HTMLElement } from './html-element.mjs';
import { WebGLRenderingContext } from './webgl-rendering-context.mjs';

class HTMLCanvasElement extends HTMLElement {
    /**
     * @param {string} contextType - The type of context to create.
     * @param {Object} [contextAttributes] - Optional attributes for the context.
     * @returns {CanvasRenderingContext2D|WebGLRenderingContext|null} The requested context.
     */
    getContext(contextType, contextAttributes = {}) {
        switch (contextType) {
            case '2d':
                return new CanvasRenderingContext2D(this, contextAttributes);
            case 'webgl':
                return new WebGLRenderingContext(this, contextAttributes);
        }
        return null;
    }
}

export { HTMLCanvasElement };
