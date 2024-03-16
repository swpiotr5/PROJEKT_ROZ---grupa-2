import React from 'react';
import { createUseStyles } from 'react-jss';
import LeftImage from './LeftImage';
import LeftAppInfo from './LeftAppInfo';

const useStyles = createUseStyles({
    left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        background: '#B6BBC4',
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
          display: 'none',
        },
      },
});

const LeftWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.left}>
        <LeftImage />
        <LeftAppInfo />
    </div>
  );
};

export default LeftWrapper;