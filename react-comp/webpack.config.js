const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const prod = env && env.production;

    return {
        entry: {
            polyfills: root('src/polyfills.js'),
            main: root('src/main.js'),
            loader: root('src/loader.js'),
            'components/sample-comp': root('src/components/sample-comp/sample-comp.js'),
            'components/user-list': root('src/components/user-list/user-list.js'),
            'components/user-card': root('src/components/user-card/user-card.js'),
            'components/angular-comp': root('src/components/angular-comp/angular-comp.js'),
            'components/react-comp': root('src/components/react-comp/main.js'),                 
        },
        output: {
            path: root('dist'),
            filename: prod ? '[name].[chunkhash].js' : '[name].js',
        },
        resolve: {
            extensions: ['.js']
        },
        devServer: {
            port: 4300,
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: root('src/index.html'),
                inject: false,
            }),
            new HtmlWebpackPlugin({
                chunks: ['components/sample-comp'],
                filename: 'components/sample-comp.html',
                template: root('src/components/sample-comp/sample-comp.html'),
                inject: false,
            }),
            new HtmlWebpackPlugin({
                chunks: ['components/user-list'],
                filename: 'components/user-list.html',
                template: root('src/components/user-list/user-list.html'),
                inject: false,
            }),
            new HtmlWebpackPlugin({
                chunks: ['components/user-card'],
                filename: 'components/user-card.html',
                template: root('src/components/user-card/user-card.html'),
                inject: false,
            }),
            new HtmlWebpackPlugin({
                chunks: ['components/angular-comp'],
                filename: 'components/angular-comp.html',
                template: root('src/components/angular-comp/angular-comp.html'),
                inject: false,
            }),
            new HtmlWebpackPlugin({
                chunks: ['components/react-comp'],
                filename: 'components/react-comp.html',
                template: root('src/components/react-comp/react-comp.html'),
                inject: false,
            }),
            /*
            new HtmlWebpackPlugin({
                chunks: ['components/html-app'],
                filename: 'components/html-app.html',
                template: root('src/components/html-app/index.html'),
                inject: false,
            }),
            
             
          
            */
        ]
    };
};

function root(file) {
    return path.resolve(__dirname, file);
}
