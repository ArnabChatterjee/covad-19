import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
    color: '#6798e5',
  },
  top: {
    animationDuration: '550ms',
    position: 'absolute',
    top: 100,
  },
  bottom:{
    position: 'relative',
      top: 150,
      left:20,
  }
});

function FacebookProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="indeterminate"
        className={classes.top}
        size={44}
        thickness={4}
        {...props}
      />
      <h3 className={classes.bottom}>Please wait...</h3>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <FacebookProgress />
    </div>
  );
}