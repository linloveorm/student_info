import { useAuth } from '@redwoodjs/auth'

const FirstPage = () => {
  const { logIn } = useAuth()

  return (
    <div>
      <link to={logIn()}></link>
    </div>
  )
}

export default FirstPage
