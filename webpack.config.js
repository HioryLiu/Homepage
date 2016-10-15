var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.jsx',
	output: {
		path: __dirname + '/public',
		filename: '[name]-[hash].js'
	},
	 resolve: {
	    extensions: ['', '.jsx', '.js']
	},
	moudle: {
		loaders:[
			{
				test: /\.json$/,
				loader:"json"
			},
			{
				test: /\.js$/,
				exclude:/node_modules/,
				loader:'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules'
			}
		
		]
	},
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
	    // colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	}

}
