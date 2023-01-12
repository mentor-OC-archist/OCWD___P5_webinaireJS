const path = require('path');

module.exports = {
mode: "production",
entry: {
    polyfill: "babel-polyfill",
    home: "./frontend/view/home/index.js",
    favorites: "./frontend/view/favorites/index.js",
    contact: "./frontend/view/contact/index.js",
},
output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "webpack_dist")
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
        }
    }
    ]
}
};