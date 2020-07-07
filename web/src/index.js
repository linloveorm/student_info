import ReactDOM from 'react-dom'
// import React from 'react'

// import Routes from 'src/Routes'
import * as serviceWorker from './serviceWorker'
import App from './App'

import './index.css'

ReactDOM.render(
  <App />,

  document.getElementById('redwood-app')
)

serviceWorker.unregister()
