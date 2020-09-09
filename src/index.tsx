import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from 'emotion-theming'
import theme from "../theme"

import 'reset-css';

function Index() {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  }

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
