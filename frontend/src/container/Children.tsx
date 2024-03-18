import { createUseStyles } from "react-jss";
import Navbar from "../components/DefaultPageTemplate/Navbar";
import MainContent from "../components/ChildrenPage/MainContent";

const useStyle = createUseStyles({
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
});

const Children = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Navbar/>
                <MainContent/>
            </div>
        </div>
        
      );
};

export default Children;