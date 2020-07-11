// In this file, all Page pages from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the page name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
//import { Switch, Redirect } from 'react-router-dom'
import { Router, Route, Redirect } from '@redwoodjs/router'

// import { Route } from './pages'
import { Main as MainLayout } from './layouts'
import {
  Dashboard as DashboardPage,
  Finance as FinancePage,
  Profile as ProfilePage,
  Typography as TypographyPage,
  Icon as IconPage,
  Account as AccountPage,
  Setting as SettingPage,
} from './pages'

const Routes = () => {
  return (
    <div>
      <div>
        <Router>
          <Redirect
            exact
            from="/"
            to="/account"
            // to="/sign-in"
            page={AccountPage}
            layout={MainLayout}
            // path="/sign-in"
          />
          <Route
            page={DashboardPage}
            exact
            layout={MainLayout}
            path="/dashboard"
          />

          <Route page={ProfilePage} exact layout={MainLayout} path="/profile" />
          <Route page={FinancePage} exact layout={MainLayout} path="/finance" />
          <Route
            page={TypographyPage}
            exact
            layout={MainLayout}
            path="/typography"
          />
          <Route page={IconPage} exact layout={MainLayout} path="/icon" />
          <Route page={AccountPage} exact layout={MainLayout} path="/account" />
          <Route page={SettingPage} exact layout={MainLayout} path="/setting" />
        </Router>
      </div>
    </div>
  )
}

export default Routes
