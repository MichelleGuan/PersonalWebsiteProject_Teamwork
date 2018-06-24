"use strict";
exports.__esModule = true;
var path = require("path");
var autotruck_1 = require("./src/server/autotruck");
var devOption_1 = require("./src/server/devOption");
autotruck_1.copyResources();
var config = {
    devtool: 'source-map',
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, devOption_1.dev.outputFolder),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.svg/, loader: 'svg-url-loader' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.tsx$/, loader: 'babel-loader!ts-loader' },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, devOption_1.dev.outputFolder),
        host: devOption_1.dev.innerIP,
        compress: true,
        port: devOption_1.dev.port //端口
    }
};
exports["default"] = config;
