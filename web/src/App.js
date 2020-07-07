import { ThemeProvider } from '@material-ui/styles'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { AuthProvider } from '@redwoodjs/auth'
import Auth0Client from '@auth0/auth0-spa-js'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import theme from './theme'

const auth0 = new Auth0Client({
  domain: 'cmkl-omega.auth0.com',
  client_id: 'Hf1MTzXndZxKu0KPOWyBwG3WTc00RRaH',
  redirect_uri: 'http://localhost:8910/account',
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_CLIENT_ID,
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

export default () => (
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
