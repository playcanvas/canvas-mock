class WebGLShaderPrecisionFormat {
    constructor(rangeMin, rangeMax, precision) {
        this._rangeMin = rangeMin;
        this._rangeMax = rangeMax;
        this._precision = precision;
    }

    get precision() {
        return this._precision;
    }

    get rangeMax() {
        return this._rangeMax;
    }

    get rangeMin() {
        return this._rangeMin;
    }
}

export { WebGLShaderPrecisionFormat };
