class DOMRect {
    /** @type {number} */
    x;

    /** @type {number} */
    y;

    /** @type {number} */
    width;

    /** @type {number} */
    height;

    /**
     * @param {number} x - The x coordinate of the top-left corner of the rectangle.
     * @param {number} y - The y coordinate of the top-left corner of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /** @type {number} */
    get top() {
        return this.y;
    }

    /** @type {number} */
    get bottom() {
        return this.y + this.height;
    }

    /** @type {number} */
    get left() {
        return this.x;
    }

    /** @type {number} */
    get right() {
        return this.x + this.width;
    }
}

export { DOMRect };
