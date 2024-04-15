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
    '@media (max-width: 1080px)': {
        right: {
          padding: '0px',
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px',
        },
      },
    '@media (max-width: 768px)': {
        right: {
            width: '100%',
        },
      },
});

interface RightWrapperProps {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightWrapper: React.FC<RightWrapperProps> = ({ setIsAuth }) => {
  const classes = useStyles();

  return (
    <div className={classes.right}>
      <FormHeader />
        <Form setIsAuth={setIsAuth} />
      <FormFooter />
    </div>
  );
};

export default RightWrapper;