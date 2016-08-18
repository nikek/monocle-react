// Cerebral core
import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'

// Vendor cerebral modules
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Useragent from 'cerebral-module-useragent'
import ModulesProvider from 'cerebral-provider-modules'

// React and view libs code
import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'

// App code
import Monocle from './modules/Monocle'
import App from './components/App'
import './main.less'




// Setup cerebral controller
const controller = Controller(Model({}))

controller.addModules({
  devtools: Devtools(),
  http: Http(),
  monocle: Monocle,
  useragent: Useragent({
    // Use CSS media queries to determine
    // custom sizes available in your model
    media: {
      small: '(min-width: 600px)',
      medium: '(min-width: 1024px)',
      large: '(min-width: 1440px)',
      portrait: '(orientation: portrait)'
    },

    // store all feature tests in model
    feature: true,

    parse: {
      // parse useragent.browser from ua string
      browser: true,
      // parse useragent.device from ua string
      device: true,
      // parse useragent.os from ua string
      os: true
    },

    // check the docs at: https://github.com/HubSpot/offline#advanced
    offline: {
      checkOnLoad: false,
      interceptRequests: true,
      reconnect: {
        initialDelay: 3,
        delay: 1.5
      },
      requests: false
    },

    // update window size on resize
    window: true
  })
})

// Provide dynamic access to modules themselves in the context passed to actions
controller.addContextProvider(ModulesProvider)

// Let's go!
render((
  <Container controller={controller}>
    <App />
  </Container>
), document.querySelector('#app'))
