import React, { Component } from 'react'
import RedwoodProvider from '@redwoodjs/web'
import ThemeProvider from '@material-ui/styles'
import Routes from '@redwoodjs/router'
import FatalErrorBoundary from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import AuthProvider from '@redwoodjs/auth'
import Auth0Client from '@auth0/auth0-spa-js'

import theme from './theme'

const auth0 = new Auth0Client({
  domain: 'cmkl-omega.auth0.com',
  client_id: 'Hf1MTzXndZxKu0KPOWyBwG3WTc00RRaH',
  redirect_uri: 'http://localhost:8910/account',
  cacheLocation: 'localstorage',
  audience: 'http://localhost:8910/',
})

// const App = () => {
//   return (
//     <FatalErrorBoundary page={FatalErrorPage}>
//       <AuthProvider client={auth0} type="auth0">
//         <ThemeProvider theme={theme}>
//           <RedwoodProvider>
//             <Routes />
//           </RedwoodProvider>
//         </ThemeProvider>
//       </AuthProvider>
//     </FatalErrorBoundary>
//   )
// }
// export default App

// class App extends Component {
//   render(
//     <FatalErrorBoundary page={FatalErrorPage}>
//       <AuthProvider client={auth0} type="auth0">
//         <ThemeProvider theme={theme}>
//           <RedwoodProvider>
//             <Routes />
//           </RedwoodProvider>
//         </ThemeProvider>
//       </AuthProvider>
//     </FatalErrorBoundary>

//   );

// }

// export default App

export default class App extends Component {
  render() {
    return (
      <FatalErrorBoundary page={FatalErrorPage}>
        <AuthProvider client={auth0} type="auth0">
          <ThemeProvider theme={theme}>
            <RedwoodProvider>
              <Routes />
            </RedwoodProvider>
          </ThemeProvider>
        </AuthProvider>
      </FatalErrorBoundary>
    )
  }
}
