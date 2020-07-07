import { Link, routes, navigate } from '@redwoodjs/router'

// const { NavigateBefore } = require('@material-ui/icons')

const CallbackPage = () => {
  return <div>{navigate('/account')}</div>
}

export default CallbackPage
