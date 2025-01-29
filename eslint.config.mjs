import playcanvasConfig from '@playcanvas/eslint-config';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
        files: ['**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser
            }
        },
    }
];
