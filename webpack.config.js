import path from 'path'
import webpack from 'webpack'

const __dirname = path.resolve()

const config = (env, argv) => {
  console.log(`argv.mode`, argv.mode)

  const backend_url = argv.mode === 'production'
    ? 'https://still-sea-39428.herokuapp.com/api/notes'
    : 'http://localhost:3001/notes'

  return {
    //entry point for bundling
  entry: './src/index.js',
  //bundled code storage, path must be absolute (path.resolve(...))
  //__dirname stores the path to the current directory
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000
  },
  devtool: 'source-map',
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
      },
      {
        test: /\.css$/,
        //cl loads styles & sl generates and injects a <style> el
        //css defs r included in main.js (no need to import them in index file)
        //otherwise use mini-css-extract-plugin
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: JSON.stringify(backend_url)
    })
  ]
  }
}

export default config