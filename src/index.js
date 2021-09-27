import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'
import PromisePolyfill from 'promise-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"

//polyfills: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills
if(!window.Promise) {
  window.Promise = PromisePolyfill
}

ReactDOM.render(<App />, document.getElementById('root'))