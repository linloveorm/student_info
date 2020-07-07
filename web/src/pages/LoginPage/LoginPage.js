import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Login = () => {
  const [username, userValue] = React.useState('null')
  const [password, passValue] = React.useState('null')

  const getUsername = (event) => {
    userValue(event.target.value)
  }
  const getPassword = (event) => {
    passValue(event.target.value)
  }

  const UserAuthTools = () => {
    const { isAuthenticated, logIn, logOut } = useAuth()

    return (
      <button
        className="Login-Button"
        onClick={async () => {
          if (isAuthenticated) {
            navigate('/account')
            // await logOut()
          } else {
            await logIn()
            // navigate('/account')
          }
        }}
      >
        {'Sign in'}
      </button>
    )
  }

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <div className="login-header">
            <AppBar title="Login" style={{ background: '#A10000' }} />
          </div>

          <div className="text-input">
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={getUsername}
              required
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={getPassword}
              required
            />
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Remember me
              </label>
            </div>

            <UserAuthTools />
            <div className="forget-password">
              <p>
                <Link to={routes.resetPass()} className="forget-color">
                  Forget Password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  )
}

export default Login
