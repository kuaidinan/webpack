var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');//生成文件到指定目录
var ExtractTextPlugin=require('extract-text-webpack-plugin');//js和css分离 插件

module.exports={
	entry:__dirname+"/app/main.js",
	output:{
		path:__dirname+"/build",
		filename:"[name]-[hash].js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			{
				test:/\.css$/,
				use: ExtractTextPlugin.extract({fallback:"style-loader", use:["css-loader","postcss-loader"]})
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")
	]
};

