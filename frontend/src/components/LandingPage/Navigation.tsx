import React from 'react';
import { createUseStyles } from 'react-jss';
import GuardianVaultLogo from "../../assets/GuardianVaultLogoDarkMode.png";

const useStyles = createUseStyles({
   navbar: {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         width: '100%',
         height: '20%',
         padding: '20px',
         backgroundColor: '#161A30',
         maxWidth: '1200px',
    },
    logo: {
        width: '100px',
        height: '100px',
    },
    login: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
    },
    button: {
        backgroundColor: '#B6BBC4',
        border: 'none',
        borderRadius: '40px',
        color: '#161A30',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        transitionDuration: '0.4s',
        '&:hover': {
            backgroundColor: '#F0ECE5',
        },
        '@media (max-width: 768px)': {
            padding: '10px 20px',
            fontSize: '14px',
            marginRight: '10px',
        }
    },
});

const Navigation = () => {
    const classes = useStyles();

    return (
        <nav className={classes.navbar}>
            <img className={classes.logo} src={GuardianVaultLogo} alt=""/>
            <ul className={classes.login}>
                <li>
                    <button className={classes.button} onClick={() => window.location.href='/login'}>Zaloguj się</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;