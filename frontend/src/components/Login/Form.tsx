import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    inputError: {
        border: '2px solid red',
      },
    errorBox: {
        border: '1px solid red',
        borderRadius: '5px',
        padding: '5px 10px',
        color: 'red',
        marginBottom: '15px',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
});

const Form = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(email)) {
          setEmailError('Wprowadź poprawny adres email.');
          return;
        }
    
        try {
          const response = await axios.post('http://localhost:5000/api/verify', { email, password });
    
          if (response.data.success) {
            navigate('/home');
          } else {
            setEmailError('Nieprawidłowy email lub hasło.');
          }
        } catch (error) {
            console.error('Wystąpił błąd podczas weryfikacji danych.', error);
            setError('Wystąpił błąd podczas weryfikacji danych. Spróbuj ponownie później.');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(e.target.value)) {
          setEmailError('Wprowadź poprawny adres email.');
        } else {
          setEmailError('');
        }
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit} className={classes.form}>
                {error && <p className={classes.errorBox}>{error}</p>}
                <div className={classes.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`${classes.input} ${emailError ? classes.inputError : ''}`}
                    />
                    {emailError && <p>Wprowadź poprawny adres email.</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={classes.input}
                    />
                    <a href="/resetPassword" className={classes.forgotPassword}>Zapomniałeś hasła?</a>
                </div>
                <button type="submit" className={classes.button}>Zaloguj się</button>
                <a href="http://localhost:8000/auth/google" className={classes.googleLogin}>
                    <FcGoogle size={25} /> Zaloguj za pomocą Google
                </a>
            </form>
        </div>
    );
};

export default Form;