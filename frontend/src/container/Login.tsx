import React from 'react';
import { createUseStyles } from 'react-jss';
import RightWrapper from '../components/Login/RightWrapper';
import LeftWrapper from '../components/Login/LeftWrapper';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#161A30',
  },
  wrapper:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    width: '80%',
    height: '80vh',
  }
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <LeftWrapper />
        <RightWrapper />
      </div>
    </div>
  );
};

export default Login;