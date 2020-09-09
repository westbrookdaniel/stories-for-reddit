import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { CustomProvider } from './CustomProvider'
import theme from "../theme"

function Index() {
    return (
      <CustomProvider resetCSS theme={theme}>
        <App />
      </CustomProvider>
    )
  }

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
