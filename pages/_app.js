import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/templatemo-space-dynamic.css'
import '../public/assets/css/owl.css'
import '../public/assets/css/fontawesome.css'
import {Provider} from "react-redux";
import configureStore from "../redux/configureStore";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        new WOW().init()
    })

  return (
      <Provider store={configureStore}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
