import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.login()}>Student Information</Link>
        </h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
