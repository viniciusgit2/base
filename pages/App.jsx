import React from 'react'
import { AppProps } from 'next/app'
import { Component } from 'react'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;