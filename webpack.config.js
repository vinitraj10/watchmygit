const webpack = require('webpack');
const path = require('path');

DEV_DIR = path.resolve(__dirname,'src');
BUILD_DIR = path.resolve(__dirname,'dist/js');

const config = {
	entry : DEV_DIR + '/app.js',
	output: {
		path:BUILD_DIR,
		publicPath:'/dist/js',
		filename: 'bundle.min.js',
	},
	module : {
		loaders:[
			{
				test:/\.jsx?/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			}
		]
	},
	devServer: {
	    historyApiFallback: true,
	},
};

module.exports = config;