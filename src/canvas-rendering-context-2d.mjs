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
    constructor(canvas) {
        this.canvas = canvas;
    }
}

// install functions
functions.forEach((func) => {
    CanvasRenderingContext2D.prototype[func] = () => {
        return {};
    };
});

export { CanvasRenderingContext2D };
