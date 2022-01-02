import { CanvasRenderingContext2D } from './canvas-rendering-context-2d.mjs';
import { HTMLElement } from './html-element.mjs';
import { WebGLRenderingContext } from './webgl-rendering-context.mjs';

class HTMLCanvasElement extends HTMLElement {
    getContext(contextType) {
        switch (contextType) {
            case '2d':
                return new CanvasRenderingContext2D(this);
            case 'webgl':
                return new WebGLRenderingContext(this);
        }
        return null;
    }
}

export { HTMLCanvasElement };
