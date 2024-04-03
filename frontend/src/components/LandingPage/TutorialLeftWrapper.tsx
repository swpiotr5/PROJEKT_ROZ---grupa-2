import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        height: '100%',
        width: '100%',
        marginRight: '50px',
    },
    header: {
        color: '#B6BBC4',
        fontSize: '2em',
    },
    subheader: {
        color: '#B6BBC4',
        fontSize: '1.2em',
    },
    info: {
        color: '#B6BBC4',
        fontSize: '1em',
    },
    btn: {
        padding: '10px 20px',
        backgroundColor: '#F0ECE5',
        color: '#161A30',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: '#161A30',
            color: '#F0ECE5',
        },
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem',
    },
    '@media (max-width: 768px)': {
        wrapper: {
            flexDirection: 'column',
            gap: '2rem',
        },
    },
});

const TutorialLeftWrapper = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.header}>Bezpiecznie, skutecznie, zawsze dostępne - Twoje narzędzie do opieki nad dziećmi.</h1>
            <h3 className={classes.subheader}>Nasza aplikacja to kompleksowe narzędzie, które ułatwia opiekunom zastępczym skuteczne zarządzanie dokumentacją oraz zapewnia wygodne śledzenie postępów i potrzeb dzieci, abyś mógł/a skupić się na budowaniu silnych relacji i oferowaniu wszechstronnej opieki.</h3>
            <div className={classes.btnWrapper}>
                <button className={classes.btn}>Pobierz poradnik</button>
            </div>
        </div>
    );
};

export default TutorialLeftWrapper;