import React from 'react'
import { makeStyles } from '@material-ui/styles'
// import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core'
// import {
//   Box1,
//   Box2,
//   TasksProgress,
//   TotalProfit,
//   LatestSales,
//   UsersByDevice,
//   LatestProducts,
//   LatestOrders
// } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: (theme = {
      spacing: '4',
    }),
  },
}))

const DashboardPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.quoteText} variant="h1">
        Dashboard
      </Typography>
      <Typography className={classes.name} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      {/* <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Box1 />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Box2 />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Grid> */}
    </div>
  )
}

export default DashboardPage
