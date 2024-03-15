import react from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footerText: {
        fontSize: '0.8rem',
      },
});

const FormFooter = () => {
    const classes = useStyles();
return (
    <div className={classes.footer}>
        <p>Don't have an account? <a href="/register">Register</a></p>
        <p className={classes.footerText}>&copy; 2024, GuardianVault. All rights reserved.</p>
    </div>
)
};

export default FormFooter;