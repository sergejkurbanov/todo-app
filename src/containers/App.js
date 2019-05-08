import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from 'components/PrivateRoute'
import routes from '../routes'

const App = ({ user }) => (
  <Switch>
    {routes.map(({ pvt, ...rest }) =>
      pvt ? (
        <PrivateRoute key={rest.path} user={user} {...rest} />
      ) : (
        <Route key={rest.path} {...rest} />
      ),
    )}
  </Switch>
)

export default connect(({ auth }) => ({
  user: auth.current,
}))(App)
