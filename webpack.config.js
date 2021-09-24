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
  }
}

export default config