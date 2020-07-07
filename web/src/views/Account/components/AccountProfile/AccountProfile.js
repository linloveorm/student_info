import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
// import CardIcon from "components/Card/CardIcon.js";
import {
  Card,
  // Icon,
  // CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  // CardHeader,
  // Button,
  // LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },

  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
    
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  dateText: {
    right: 100
  },
  editButton: {
    width: '90%', margin: 10
  },
  
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <CardHeader color="warning" stats icon>
        
      </CardHeader> */}
      <CardContent>
        <div className={classes.details}>
          
          <div>
            {/* <Avatar
              className={classes.avatar}
              src={user.avatar}
            />   */}
            <Typography
              gutterBottom
              variant="h2"
              className={classes.dateText}
              // align="right"
            >
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
              // className={classes.dateText}
              color="textSecondary"
              variant="body1"
              // align="right"
            >
              {/* {moment().format('hh:mm A')} ({user.timezone}) */}
              Entertainment Innovation Center
            </Typography>
            <Divider/>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
            align="right"
          />  
        </div>
        <Typography
              
          variant="subtitle1"
        >
            CMKL Email
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
          gutterBottom
        >
          {/* {moment().format('hh:mm A')} ({user.timezone}) */}
            kamin@cmkl.ac.th
        </Typography>
        <div>
          <Typography
            variant="subtitle1"
            // align="center"
          >
              Student ID
          </Typography>
          
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
            // align="center"
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
      {/* <Divider /> */}
      
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
