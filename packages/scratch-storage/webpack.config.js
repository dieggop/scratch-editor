const path = require('path');
const webpack = require('webpack');

const ScratchWebpackConfigBuilder = require('scratch-webpack-configuration');

const baseConfig = new ScratchWebpackConfigBuilder(
    {
        rootPath: path.resolve(__dirname),
        enableReact: false,
        enableTs: true,
        shouldSplitChunks: false,
        // [Code com Eric] O worker de fetch é criado com
        // `new Worker(new URL('./FetchWorkerTool.worker', import.meta.url))`,
        // e a URL do chunk é resolvida contra o publicPath gravado NESTE build.
        // Com o padrão '/', quem hospeda o editor fora da raiz do site (ex.:
        // /scratch/<versão>/) pede o worker em /chunks/... e toma 404.
        // 'auto' resolve a partir da URL do próprio bundle, que é o que
        // scratch-gui já faz no bundle dele.
        publicPath: 'auto'
    })
    .setTarget('browserslist')
    .merge({
        resolve: {
            fallback: {
                Buffer: require.resolve('buffer/')
            }
        }
    });

if (!process.env.CI) {
    baseConfig.addPlugin(new webpack.ProgressPlugin());
}

// Web-compatible
const webConfig = baseConfig.clone()
    .merge({
        output: {
            library: {
                name: 'ScratchStorage',
                type: 'umd2'
            },
            path: path.resolve(__dirname, 'dist', 'web'),
            clean: false
        }
    });

const webNonMinConfig = webConfig.clone()
    .merge({
        entry: {
            'scratch-storage': path.join(__dirname, './src/index.ts')
        },
        optimization: {
            minimize: false
        }
    });

const webMinConfig = webConfig.clone()
    .merge({
        entry: {
            'scratch-storage.min': path.join(__dirname, './src/index.ts')
        },
        optimization: {
            minimize: true
        }
    });

// Node-compatible
const nodeConfig = baseConfig.clone()
    .merge({
        entry: {
            'scratch-storage': path.join(__dirname, './src/index.ts')
        },
        output: {
            library: {
                type: 'commonjs2'
            },
            chunkFormat: 'commonjs',
            path: path.resolve(__dirname, 'dist', 'node'),
            clean: false
        }
    })
    .addExternals(['base64-js', 'js-md5', 'localforage', 'text-encoding']);

module.exports = [webNonMinConfig.get(), webMinConfig.get(), nodeConfig.get()];
