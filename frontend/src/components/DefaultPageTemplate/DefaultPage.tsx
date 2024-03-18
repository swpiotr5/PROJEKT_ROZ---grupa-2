import Navbar from './Navbar';
import Content from './Content';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '1rem',
        width: '100vw',
        backgroundColor: '#F0ECE5',
        paddingTop: '100px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
        height: '100%',
        width: '100%', 
    },
    '@media (max-width: 768px)': {
        root: {
            paddingTop: '500px',
        },
        wrapper: {
            flexDirection: 'column',
            gap: '2rem',
        },
    },
});

const DefaultPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Navbar/>
                <Content/>
            </div>
        </div>
        
      );
};


export default DefaultPage;
