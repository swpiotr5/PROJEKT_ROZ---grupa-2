import { createUseStyles } from 'react-jss';
import userLoginImage from '../../assets/userLogin.png'; 

const useStyles = createUseStyles({
    image: {
        width: '80%', 
        height: 'auto', 
    },
});

const LeftImage = () => {
    const classes = useStyles();

    return (
        <img className={classes.image} src={userLoginImage} alt="User Login" />
    );
};

export default LeftImage;