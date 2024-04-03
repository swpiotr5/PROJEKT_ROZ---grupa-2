import { createUseStyles } from 'react-jss';
import { logoutUser } from '../../services/UserService';
import GuardianVaultLogo from '../../assets/GuardianVaultLogo.png';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    navbar: {
        backgroundColor: '#B6BBC4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        padding: '0 5rem',
        WebkitBoxShadow: '1px 20px 30px -5px rgba(182, 187, 196, 1)',
        MozBoxShadow: '1px 20px 30px -5px rgba(182, 187, 196, 1)',
        boxShadow: '1px 20px 30px -5px rgba(182, 187, 196, 1)',
        width: '100%',
        position: 'fixed',
        top: 0,
        height: '100px',
    },
    logo: {
        width: 'clamp(70px, 10vw, 100px)',
        height: 'auto',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
    },
    links: {
        fontSize: `clamp(14px, 2vw, 18px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        gap: '5rem',
        listStyleType: 'none',
        '& a': {
            textDecoration: 'none',
            color: '#31304D',
            '&:visited': {
                color: '#31304D',
            },
            '&:hover': {
                color: '#F0ECE5',
            },
        },
    },
    logoutBtn: {
        backgroundColor: '#31304D',
        color: '#F0ECE5',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#F0ECE5',
            color: '#31304D',
        },
    },
    '@media (max-width: 768px)': {
        navbar: {
            flexDirection: 'column',
            height: 'auto',
            padding: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            marginBottom: '1rem',
        },
        linksContainer: {
            marginTop: '1rem',
        },
        links: {
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
        },
        logoutBtn: {
            marginTop: '1rem',
        },
    },
});

const Navbar = () => {
    const classes = useStyles();

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <nav className={classes.navbar}>
            <img className={classes.logo} src={GuardianVaultLogo} alt="" />
            <div className={classes.linksContainer}>
                <ul className={classes.links}>
                <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/children">Dzieci</Link></li>
                    <li><Link to="/documents">Dokumenty</Link></li>
                    <li><Link to="/calendar">Kalendarz</Link></li> 
                    <li><Link to="/settings">Ustawienia</Link></li> 
                </ul>
            </div>
            <button onClick={handleLogout} className={classes.logoutBtn}>Wyloguj</button>
        </nav>
    );
};

export default Navbar;