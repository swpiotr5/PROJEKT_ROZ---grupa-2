import React from 'react';
import { createUseStyles } from 'react-jss';
import TutorialRightWrapper from "./TutorialRightWrapper";
import TutorialLeftWrapper from "./TutorialLeftWrapper";

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '20px',
        maxWidth: '1200px',
        backgroundColor: '#161A30',
    },
});

const Body = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <TutorialLeftWrapper />
            <TutorialRightWrapper />
        </div>
    );
};

export default Body;