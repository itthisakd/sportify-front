import React from 'react'
import { Button, Grid, Typography, Paper } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
   top: 0, right: 0, height: "43px", position: "absolute", margin: "0px"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SectionHeader({title, doneAction}) {
  const classes = useStyles();
  
  return (
    <div >
      <Paper elevation={1} >
      <Grid container style={{height: "43px"}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} ><Typography variant="h6" component="p">
        {title}
        </Typography></Grid>
        <Grid item xs={4} >
        </Grid>

      </Grid>
      </Paper>
      <Button size="medium"
        color="secondary" className={classes.margin} onClick={doneAction}>
        Done
      </Button>
    </div>
  )
}
