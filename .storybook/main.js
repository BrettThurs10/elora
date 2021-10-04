const path = require('path')
const fiber = require('fibers')
const sass = require('sass')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    logLevel: 'debug',
    addons: [
        // {
        //   name: "@storybook/preset-scss",
        //   options: {
        //     cssLoaderOptions: {
        //       modules: true,
        //     },
        //   },
        // },
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            '@app': path.resolve(__dirname, '../src/app/'),
            '@styles': path.resolve(__dirname, '../src/styles/'),
            _images: path.resolve(__dirname, '../src/images/'),
            _animations: path.resolve(__dirname, '../src/animations/'),
            _fonts: path.resolve(__dirname, '../src/fonts/'),
        }
        config.module.rules.push({
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        url: true,
                        sourceMap: true,
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: sass,
                        sassOptions: {
                            fiber: fiber,
                        },
                        sourceMap: true,
                    },
                },
            ],
        })

        return config
    },
}
