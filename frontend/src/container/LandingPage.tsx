import React from 'react';
import { createUseStyles } from 'react-jss';
import Body from '../components/LandingPage/Body';
import Footer from '../components/LandingPage/Footer';
import Navigation from '../components/LandingPage/Navigation';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#161A30',
    },
    '@media (max-width: 1080px)': {
        root: {
            height: '100%',
        },
    },
});

const LandingPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navigation />
            <Body />
            <Footer />
        </div>
    );
};

export default LandingPage;