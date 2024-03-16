import { createUseStyles } from 'react-jss';
import React, { useState } from 'react';
import RightWrapper from '../components/Register/RightWrapper';
import LeftWrapper from '../components/Register/LeftWrapper';


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
  
const Register = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Perform registration logic here
    };

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <LeftWrapper />
          <RightWrapper />
        </div>
      </div>
    );
  };

  export default Register;