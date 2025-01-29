class WebGLShader {
    /** @type {number} */
    #type;

    /**
     * @param {number} type - The type of the shader.
     */
    constructor(type) {
        this.#type = type;
    }
}

export { WebGLShader };
