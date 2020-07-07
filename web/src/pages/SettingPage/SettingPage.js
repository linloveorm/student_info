import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link, routes, navigate } from '@redwoodjs/router'
import { Grid, Typography, Button, CardActions } from '@material-ui/core'
import { useAuth } from '@redwoodjs/auth'

// import { Notifications, Password,AccountProfile } from './components';
import {
  AccountProfile,
  EditContact,
  EditEmergen,
  EditAddress,
} from './components'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: (theme = {
      spacing: '4',
    }),
  },
  saveButton: {
    right: -26,
    // top: -40,
    // right: -800
  },
}))

const SettingPage = () => {
  const classes = useStyles()

  const UserAuthTools = () => {
    const { isAuthenticated, logIn, logOut } = useAuth()

    return (
      <button
        className="Logout-Button"
        onClick={async () => {
          if (isAuthenticated) {
            // navigate('/')
            await logOut()
            navigate('/')
          } else {
            // await logIn()
            // navigate('/account')
          }
        }}
      >
        {'Sign out'}
      </button>
    )
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.quoteText} gutterBottom variant="h1">
        Edit Profile
        <CardActions>
          <Link variant="h5"> Discard Changes</Link>
          {/* <Button className={classes.saveButton} variant="outlined" color="default" href="/settings" placement="top-end">
              Discard Changes
            </Button> */}
          <Button
            className={classes.saveButton}
            color="primary"
            href="/dashboard"
            placement="top-end"
            variant="outlined"
          >
            Save
          </Button>
          <UserAuthTools />

          {/* <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Edit Profile
          </Button> */}

          {/* <Button variant="text">Remove picture</Button> */}
        </CardActions>
      </Typography>

      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xl={4} xs={12}>
          <AccountProfile />
        </Grid>

        <Grid className={classes.con} item lg={4} md={6} xl={8} xs={12}>
          <EditContact />
        </Grid>
        {/* <Grid
          item
          lg={2}
          md={3}
          xl={3}
          xs={2}
        >
          <Button className={classes.editButton} variant="outlined" color="primary" href="/settings" placement="top-end">
              Edit Profile
            </Button>
        </Grid> */}
        <Grid item lg={6} md={6} xl={8} xs={12}>
          <EditEmergen />
        </Grid>
        <Grid item lg={4} md={6} xl={8} xs={12}>
          <EditAddress />
        </Grid>

        {/* <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid> */}
      </Grid>
    </div>
  )
}

export default SettingPage
