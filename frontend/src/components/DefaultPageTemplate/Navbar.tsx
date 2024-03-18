import { createUseStyles } from 'react-jss';
import GuardianVaultLogo from '../../assets/GuardianVaultLogo.png';

const useStyles = createUseStyles({
    navbar: {
        backgroundColor: '#B6BBC4',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        padding: '0 5rem',
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
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navbar}>
            <img className={classes.logo} src={GuardianVaultLogo} alt="" />
            <div className={classes.linksContainer}>
                <ul className={classes.links}>
                    <li><a href="">Strona główna</a></li>
                    <li><a href="">Dzieci</a></li>
                    <li><a href="">Dokumenty</a></li>
                    <li><a href="">Kalendarz</a></li>
                    <li><a href="">Ustawienia</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;