import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import landing from '../../assets/landing.png';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
        height: '100%',
        width: '100%',
    },
    pic: {
        width: '100%',
        height: 'auto',
    },
    '@media (max-width: 768px)': {
        wrapper: {
            flexDirection: 'column',
            gap: '2rem',
        },
    },
});


const TutorialRightWrapper = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <img className={classes.pic} src={landing} alt="landing" />
        </div>
    );
};

export default TutorialRightWrapper;