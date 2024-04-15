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
    padding: '20px',
    width: '80%',
    height: '100vh',
  },
  '@media (max-width: 1080px)': {
    wrapper: {
      width: '100%',
      height: '100vh',
      padding: '0px',
    },
  },
});

interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <LeftWrapper />
        <RightWrapper setIsAuth={setIsAuth}/>
      </div>
    </div>
  );
};

export default Login;