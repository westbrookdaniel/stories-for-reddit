import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from "../theme"

function Index() {
    return (
      <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    )
  }

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
