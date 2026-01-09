import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>Custom APP</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com/',
      
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com/" target='_blank'> Visit GOOGLE</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com/', target: '_blank'},
  'click me to goon',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
  // <App/>
)
