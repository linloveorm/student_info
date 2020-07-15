// In this file, all Page pages from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the page name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Switch, Redirect } from 'react-router-dom'
// import { Router, Route } from '@redwoodjs/router'

// import { Route } from './pages'
import { RouteWithLayout } from './components'
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts'
import {
  Dashboard as DashboardPage,
  Finance as FinancePage,
  Profile as ProfilePage,
  Typography as TypographyPage,
  Icon as IconPage,
  Account as AccountPage,
  Setting as SettingPage,
  First as FirstPage,
  NotFound as NotFoundPage,
} from './pages'

const Routes = () => {
  return (
    <div>
      <div>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/first"
            // to="/sign-in"
            page={FirstPage}
            layout={MainLayout}
            // path="/sign-in"
          />
          <RouteWithLayout
            component={DashboardPage}
            exact
            layout={MainLayout}
            path="/dashboard"
            name="dashboard"
          />

          <RouteWithLayout
            component={ProfilePage}
            exact
            layout={MainLayout}
            path="/profile"
            name="profile"
          />
          <RouteWithLayout
            component={FinancePage}
            exact
            layout={MainLayout}
            path="/finance"
            name="finance"
          />
          <RouteWithLayout
            component={TypographyPage}
            exact
            layout={MainLayout}
            path="/typography"
            name="typograph"
          />
          <RouteWithLayout
            component={IconPage}
            exact
            layout={MainLayout}
            path="/icon"
            name="icon"
          />
          <RouteWithLayout
            component={AccountPage}
            exact
            layout={MainLayout}
            path="/account"
            name="account"
          />
          <RouteWithLayout
            component={SettingPage}
            exact
            layout={MainLayout}
            path="/setting"
            name="setting"
          />
          <Route component={FirstPage} path="/first" name="first" />
        </Switch>
      </div>
    </div>
  )
}

export default Routes
