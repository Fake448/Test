// https://blog.alexdevero.com/electron-and-react-app/

// import React from 'react'
// import { render } from 'react-dom'

// import App from './components/app'

// import './assets/css/app.css'

// let root = document.createElement('div')
// root.id = 'root'
// document.body.appendChild(root)

// render(<App />, document.getElementById('root'))

import _ from 'lodash';

function component() {
   const element = document.createElement('div');
 
  // Lodash, now imported by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
   return element;
 }
 
 document.body.appendChild(component());