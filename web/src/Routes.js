// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Switch, Redirect } from 'react-router-dom'
import { Router, Route } from '@redwoodjs/router'

import { RouteWithLayout } from './components'
import { Main as MainLayout } from './layouts'
import {
  Dashboard as DashboardView,
  MyFinance as MyFinanceView,
  Profile as ProfileView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
} from './views'

const Routes = () => {
  return (
    <div>
      <div>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/account"
            // to="/sign-in"
            component={AccountView}
            layout={MainLayout}
            // path="/sign-in"
          />
          <RouteWithLayout
            component={DashboardView}
            exact
            layout={MainLayout}
            path="/dashboard"
          />

          <RouteWithLayout
            component={ProfileView}
            exact
            layout={MainLayout}
            path="/profile"
          />
          <RouteWithLayout
            component={MyFinanceView}
            exact
            layout={MainLayout}
            path="/finance"
          />
          <RouteWithLayout
            component={TypographyView}
            exact
            layout={MainLayout}
            path="/typography"
          />
          <RouteWithLayout
            component={IconsView}
            exact
            layout={MainLayout}
            path="/icons"
          />
          <RouteWithLayout
            component={AccountView}
            exact
            layout={MainLayout}
            path="/account"
          />
          <RouteWithLayout
            component={SettingsView}
            exact
            layout={MainLayout}
            path="/setting"
          />
        </Switch>
      </div>
    </div>
  )
}

export default Routes
