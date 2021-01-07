const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    entry: path.resolve(srcDir, 'index.js'),
    output: {
        path: distDir,
        filename: 'element-forge.js',
        library: 'ElementForge',
        libraryTarget: 'umd',
    },
};