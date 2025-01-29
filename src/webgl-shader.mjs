class WebGLShader {
    /** @type {number} */
    #type; /* eslint-disable-line no-unused-private-class-members */

    /**
     * @param {number} type - The type of the shader.
     */
    constructor(type) {
        this.#type = type;
    }
}

export { WebGLShader };
