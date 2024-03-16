import React from 'react';
import { createUseStyles } from 'react-jss';
import FormHeader from './FormHeader';
import Form from './Form';
import FormFooter from './FormFooter';

const useStyles = createUseStyles({
    left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        backgroundColor: '#F0ECE5',
        width: '50%',
        height: '100%'
      },
    '@media (max-width: 1080px)': {
        left: {
          padding: '0px',
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
        },
      },
    '@media (max-width: 768px)': {
        left: {
            width: '100%',
        },
      },
});

const LeftWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.left}>
      <FormHeader />
      <Form />
      <FormFooter />
    </div>
  );
};

export default LeftWrapper;