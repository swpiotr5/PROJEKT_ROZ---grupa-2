import React from 'react';
import { createUseStyles } from 'react-jss';
import rightImage from '../../assets/tree.jpg'; 

const useStyles = createUseStyles({
    wrapper: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${rightImage})`,
        flexDirection: 'column',
        padding: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        position: 'relative', 
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `linear-gradient(rgba(49, 48, 77, 0.9), rgba(49, 48, 77, 0.9))`,
            filter: 'opacity(0.8) brightness(1.2) saturate(1.0)',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
        },
    },
    infoText: {
        color: '#F0ECE5',
        textAlign: 'center',
        fontSize: 'larger',
        display: 'inline-block',
        marginBottom: '40px', 
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Arial, sans-serif', 
        lineHeight: '1.6', 
        letterSpacing: '1px',
        textShadow: '10px 5px 10px rgba(0, 0, 0, 0.5)', 
    },
    '@media (max-width: 1080px)': {
    wrapper: {
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px',
          '&::before': {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
        },
        },
      },
    '@media (max-width: 768px)': {
        wrapper: {
          display: 'none',
        },
      },
});

const RightWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
        <p className={classes.infoText}>Dzięki naszej aplikacji możesz łatwo zarządzać dokumentami dzieci, którymi się opiekujesz. </p>
        <p className={classes.infoText}>Dodawaj, sortuj i przechowuj dokumentację w jednym miejscu, aby zyskać lepszy przegląd i organizację.</p>
        <p className={classes.infoText}>Ułatw sobie życie i załóż konto już teraz, aby zacząć korzystać z prostego i efektywnego narzędzia do opieki nad dziećmi!</p>
    </div>
  );
};

export default RightWrapper;