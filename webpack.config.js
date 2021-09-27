import path from 'path'
const __dirname = path.resolve()

const config = {
  //entry point for bundling
  entry: './src/index.js',
  //bundled code storage, path must be absolute (path.resolve(...))
  //__dirname stores the path to the current directory
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  //loader are required for e.g. bundling react (jsx) files
  //loaders definde under module prop
  //loaders require installation as a dev-dej
  //npm i @babel/core babel-loader @babel/preset-react --save-dev
  module: {
    //in the rules arr
    rules: [
      {
        //what files is the loader for?
        test: /\.js$/,
        //what will process those files?
        loader: 'babel-loader',
        //loader params
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    ]
  }
}

export default config