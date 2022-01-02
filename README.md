# Canvas-Mock: A Mock for HTMLCanvasElement

The `canvas-mock` package recreates the `HTMLCanvasElement` API and is intended to be used in a Node.js environment. This makes it possible to run WebGL-based libraries server-side or to execute unit tests for WebGL codebases within Node.

It has been tested with the [PlayCanvas Engine](https://github.com/playcanvas/engine) but other libraries should be compatible too.

## Installation

Ensure you have [node](http://nodejs.org/) installed. Then:

```bash
npm install @playcanvas/canvas-mock
```

## Usage

`canvas-mock` is currently only available as ES Modules. To use it, do:

```javascript
import { HTMLCanvasElement } from '@playcanvas/canvas-mock';

const width = 500;
const height = 500;
const canvas = new HTMLCanvasElement(width, height);
const gl = canvas.getContext('webgl');

// Use WebGL API as normal
```

Currently, only `webgl` or `2d` contexts can be requested (`webgl2` is unavailable). The WebGL 1.0 implementation assumes a minimum supported spec (so no extensions are available and capabilities are restricted to the absolute minimum allowed by the WebGL 1.0 spec).
