import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ChakraProvider } from '@chakra-ui/core'
import theme from "../theme"

function Index() {
    return (
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    )
  }

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
