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
  domain: 'cmkl-omega.auth0.com',
  client_id: 'Hf1MTzXndZxKu0KPOWyBwG3WTc00RRaH',
  redirect_uri: 'https://128.199.87.182:8910/account',
  cacheLocation: 'localstorage',
  audience: 'https://128.199.87.182:8910',
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
