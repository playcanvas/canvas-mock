const functions = [
    'arc',
    'arcTo',
    'beginPath',
    'bezierCurveTo',
    'clearRect',
    'clip',
    'closePath',
    'createConicGradient',
    'createImageData',
    'createLinearGradient',
    'createPattern',
    'createRadialGradient',
    'drawFocusIfNeeded',
    'drawImage',
    'ellipse',
    'fill',
    'fillRect',
    'fillText',
    'getContextAttributes',
    'getImageData',
    'getLineDash',
    'getTransform',
    'isPointInPath',
    'isPointInStroke',
    'lineTo',
    'measureText',
    'moveTo',
    'putImageData',
    'quadraticCurveTo',
    'rect',
    'resetTransform',
    'restore',
    'rotate',
    'save',
    'scale',
    'scrollPathIntoView',
    'stroke',
    'setLineDash',
    'setTransform',
    'strokeRect',
    'strokeText',
    'transform',
    'translate'
];

class CanvasRenderingContext2D {
    /** @type {HTMLCanvasElement} */
    canvas;

    /** @type {Object} */
    #contextAttributes;

    /**
     * @param {HTMLCanvasElement} canvas - The canvas element to create the context from.
     * @param {Object} [contextAttributes] - Optional attributes for the context.
     */
    constructor(canvas, contextAttributes = {}) {
        this.canvas = canvas;
        this.#contextAttributes = {
            alpha: true,
            colorSpace: 'srgb',
            desynchronized: false,
            willReadFrequently: false,
            ...contextAttributes
        };
    }

    /**
     * @returns {Object} The context attributes.
     */
    getContextAttributes() {
        return { ...this.#contextAttributes };
    }
}

// install functions
functions.forEach((func) => {
    CanvasRenderingContext2D.prototype[func] = () => {
        return {};
    };
});

export { CanvasRenderingContext2D };
