import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FcGoogle } from 'react-icons/fc';


const useStyles = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        margin: '0px auto 15px',
        '&:focus': {
            outline: 'none',
            border: '1px solid #4CAF50',
        },
    },
    button: {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#31304D',
        color: 'white',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:active': {
          transform: 'scale(0.95)',
        },
        '&:hover': {
            backgroundColor: '#161A30',
          },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      },
    googleLogin: {
        color: '#161A30',
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
            color: '#31304D',
          },
        marginTop: '10px',
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#161A30',
      },
});

const Form = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Add logic to handle form submission
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={classes.input}
                    />
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={classes.input}
                    />
                    <a href="#" className={classes.forgotPassword}>Forgot password?</a>
                </div>
                <button type="submit" className={classes.button}>Login</button>
                <a href="#" className={classes.googleLogin}>
                    <FcGoogle size={25} /> Sign in with Google
                </a>
            </form>
        </div>
    );
};

export default Form;