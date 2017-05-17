module.exports={
    entry:[
        './src/index.js'
    ],
    output:{             
        filename:'main.js'
    },
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js",".jsx", ".json"]
    },

  module:{
      rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
             {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
             },
             
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },       
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',	
            query: {
               presets: ['es2015', 'react', 'env']
            }},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
             },
            ]}
       
}


