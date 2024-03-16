import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { registerUser } from '../../services/UserService';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const classes = useStyles();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(e.target.value)) {
          setEmailError('Wprowadź poprawny adres email.');
        } else {
          setEmailError('');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Wprowadź poprawny email.");
            return;
        }

        if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            setErrorMessage("Hasło musi zawierać co najmniej 8 znaków, jedną cyfrę i jedną literę.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Hasła są różne.");
            return;
        }

        try {
            const response = await registerUser(email, password);
            if (response.error) {
                setErrorMessage(response.message);
                return;
            }
        
            setErrorMessage("Konto utworzone pomyślnie.");
        } catch (error) {
            if ((error as Error).message.includes('ECONNREFUSED')) {
                setErrorMessage("Błąd proxy: Nie można przekierować żądania. Brak połączenia z serwerem.");
            } else {
                setErrorMessage("Brak połączenia z serwerem.");
            }
        }
    };

    return (
        <div className={classes.wrapper}>
            {errorMessage && <div className={classes.errorBox}>{errorMessage}</div>}
            <form onSubmit={handleSubmit} className={classes.form} >
                <div className={classes.inputContainer}>
                    <label htmlFor="password">Email:</label>
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
                    <label htmlFor="password">Password:</label>
                    <input className={classes.input} type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className={classes.input} type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <button className={classes.button} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Form;