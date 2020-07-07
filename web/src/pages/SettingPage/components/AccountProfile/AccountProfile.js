import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  // Link,
  // LinearProgress
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: 'flex',
  },

  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: (theme = {
      spacing: '2',
    }),
  },
  editButton: {
    width: '90%',
    margin: 10,
  },
}))

const AccountProfile = (props) => {
  const { className, ...rest } = props

  const classes = useStyles()

  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png',
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              John Doe
            </Typography>
            {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {/* {moment().format('hh:mm A')} ({user.timezone}) */}
              Entertainment Innovation Center
            </Typography>
            <Divider />
          </div>
          <Avatar className={classes.avatar} src={user.avatar} />
        </div>
        <Typography variant="subtitle1">CMKL Email</Typography>
        {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
        <Typography
          className={classes.dateText}
          color="textSecondary"
          variant="body1"
          gutterBottom
        >
          {/* {moment().format('hh:mm A')} ({user.timezone}) */}
          kamin@cmkl.ac.th
        </Typography>
        <div>
          <Typography variant="subtitle1">Student ID</Typography>

          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            1098771899
          </Typography>
        </div>

        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div> */}
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} color="primary" variant="text">
          Upload Photo
        </Button>
        {/* <Link className={classes.editButton}  color="primary" >
          Upload Photo
        </Link> */}
        <Button variant="text">Remove Photo</Button>
      </CardActions>
    </Card>
  )
}

AccountProfile.propTypes = {
  className: PropTypes.string,
}

export default AccountProfile
