import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import { LocalGasStationRounded } from '@material-ui/icons'
import { Redirect } from 'auth0-js'

import Routes from 'src/Routes'

const FirstPage = () => {
  const { isAuthenticated, logIn, logOut } = useAuth()

  return (
    <div>
      <link to={logIn()}></link>
    </div>
  )
}

export default FirstPage
