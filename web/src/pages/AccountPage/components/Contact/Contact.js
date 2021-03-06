import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  // Avatar,
  Typography,
  // // Divider,
  Button,
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
  Butt: {
    width: '90%',
    align: 'center',
  },
}))

const Contact = (props) => {
  const { className, ...rest } = props

  const classes = useStyles()

  // const user = {
  //   name: 'Shen Zhi',
  //   city: 'Los Angeles',
  //   country: 'USA',
  //   timezone: 'GTM-7',
  //   avatar: '/images/avatars/avatar_11.png'
  // };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h4">
              Contact Information
            </Typography>
            {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
            {/* <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')} ({user.timezone})

            </Typography> */}
          </div>
          {/* <Avatar
            className={classes.avatar}
            src={user.avatar}
          /> */}
        </div>
        <Typography variant="subtitle1">Phone Number</Typography>
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
          412-856-1892
        </Typography>
        <div>
          <Typography variant="subtitle1">Personal Email</Typography>

          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            kaminph@gmail.com
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
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      ></Button>

      {/* <Button className={classes.Butt} variant="outlined" color="primary" >
            Make Payment
      </Button> */}

      {/* <Divider /> */}
      <CardActions>
        {/* <Button className={classes.Butt} variant="outlined" color="primary" >

        </Button> */}
        {/* <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >
          Edit Profile
        </Button> */}
        {/* <Button className={classes.editButton} variant="outlined" color="primary" >
          Edit Profile
        </Button> */}
        {/* <Button variant="text">Remove picture</Button> */}
      </CardActions>
    </Card>
  )
}

Contact.propTypes = {
  className: PropTypes.string,
}

export default Contact
