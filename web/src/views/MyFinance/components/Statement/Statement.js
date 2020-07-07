import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Typography, Divider, Button} from '@material-ui/core';
// import typography from 'theme/typography';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  pos: {
    marginTop: 5,
    marginLeft: 15
  },
  pos2: {
    marginTop: 5,
    marginLeft: 15
  },
  Divider: {
    marginTop: 7,
    
  },
  Makepayment: {
    marginTop: 20, 
    width: "90%", margin: 10 , 
    
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Statement = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          // subheader="Amount Due 8/11/2020"
          
          title="Statement Activity"
        />
          <Typography className={classes.pos} color="textSecondary">
          Amount Due  8/11/2020
          </Typography>
          <Typography className={classes.pos2} color="textSecondary">
          Amount Overdue
          </Typography>
          <Divider className={classes.Divider}/>
          <Typography className={classes.pos2} color="textSecondary">
          Total Amount Due
          </Typography>
          <Button className={classes.Makepayment} variant="outlined" color="primary" padding="full">
            Make Payment
          </Button>
          

        
      </form>
    </Card>
  );
};

Statement.propTypes = {
  className: PropTypes.string
};

export default Statement;
