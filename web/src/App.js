import { ThemeProvider } from '@material-ui/styles'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { AuthProvider } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Routes from './Routes'
import theme from './theme'

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: 'https://omega-next.cmkl.ac.th/account',
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,
})

const browserHistory = createBrowserHistory()

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

export default () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={auth0} type="auth0">
      <ThemeProvider theme={theme}>
        <RedwoodProvider>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </RedwoodProvider>
      </ThemeProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)
