class WebGLShaderPrecisionFormat {
    /** @type {number} */
    #rangeMin;

    /** @type {number} */
    #rangeMax;

    /** @type {number} */
    #precision;

    /**
     * @param {number} rangeMin - The base 2 log of the absolute value of the minimum value that can be represented.
     * @param {number} rangeMax - The base 2 log of the absolute value of the maximum value that can be represented.
     * @param {number} precision - The number of bits of precision that can be represented. For integer formats this value is always 0.
     */
    constructor(rangeMin, rangeMax, precision) {
        this.#rangeMin = rangeMin;
        this.#rangeMax = rangeMax;
        this.#precision = precision;
    }

    /** @type {number} */
    get precision() {
        return this.#precision;
    }

    /** @type {number} */
    get rangeMax() {
        return this.#rangeMax;
    }

    /** @type {number} */
    get rangeMin() {
        return this.#rangeMin;
    }
}

export { WebGLShaderPrecisionFormat };
