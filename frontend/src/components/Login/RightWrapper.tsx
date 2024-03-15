import React from 'react';
import { createUseStyles } from 'react-jss';
import FormHeader from './FormHeader';
import Form from './Form';
import FormFooter from './FormFooter';

const useStyles = createUseStyles({
    right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        backgroundColor: '#F0ECE5',
        width: '50%',
        height: '100%'
      },
});

const RightWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.right}>
      <FormHeader />
      <Form />
      <FormFooter />
    </div>
  );
};

export default RightWrapper;