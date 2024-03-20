import { createUseStyles } from 'react-jss';
import GuardianVaultLogo from '../../assets/GuardianVaultLogo.png';

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
    },
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navbar}>
            <img className={classes.logo} src={GuardianVaultLogo} alt="" />
            <div className={classes.linksContainer}>
                <ul className={classes.links}>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/children">Dzieci</a></li>
                    <li><a href="">Dokumenty</a></li>
                    <li><a href="">Kalendarz</a></li>
                    <li><a href="">Ustawienia</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;