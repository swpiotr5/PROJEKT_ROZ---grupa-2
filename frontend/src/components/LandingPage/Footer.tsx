import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        padding: '20px',
        backgroundColor: '#161A30',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>

        </div>
    );
};

export default Footer;