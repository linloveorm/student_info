import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  // Avatar,
  Typography,
  Divider,
  // Divider,
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
  editButton: {
    width: "90%", margin: 10
  },
  
}));

const Emergen = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // const user = {
  //   name: 'Shen Zhi',
  //   city: 'Los Angeles',
  //   country: 'USA',
  //   timezone: 'GTM-7',
  //   avatar: '/images/avatars/avatar_11.png'
  // };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          
          <div>
            
            <Typography
              gutterBottom
              variant="h4"
            >
              Emergency Contact
        
            </Typography>
              
            <Typography
              
              variant="h5"
            >
              Contact #1
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
        <Divider />
        <Typography
              
              variant="subtitle1"
            >
              Name
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
              Jane Doe
            </Typography>
            <div>
              <Typography
                variant="subtitle1"
              >
                Relationship
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                Mother
              </Typography>
            </div>
              <Typography
                variant="subtitle1"
              >
                Phone Number
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                191
              </Typography>
              <Typography
                variant="subtitle1"
              >
                Email
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                janedoe@cmkl.ac.th
              </Typography>
             
              <Typography
                
                variant="h5"
              >
                Contact #2
              </Typography>
              <Divider/>   
              <Typography
                
                variant="subtitle1"
              >
                Name
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
                Jeff Doe
              </Typography>
              <div>
                <Typography
                  variant="subtitle1"
                >
                  Relationship
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  Father
                </Typography>
              </div>
                <Typography
                  variant="subtitle1"
                >
                  Phone Number
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  199
                </Typography>
                <Typography
                  variant="subtitle1"
                >
                  Email
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  jeffdoe@ckml.ac.th
                </Typography>
                            

        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div> */}
      </CardContent>
      {/* <Divider /> */}
      <CardActions>
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
  );
};

Emergen.propTypes = {
  className: PropTypes.string
};

export default Emergen;
