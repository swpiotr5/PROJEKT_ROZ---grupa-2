import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    label: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        fontWeight: 'bold',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '200px',
        '&:focus': {
            outline: 'none',
            border: '1px solid #4CAF50',
        },
    },
    inputError: {
        border: '1px solid #E21A4B',
    },
    errorText: {
        color: '#E21A4B',
    },
});

interface InputFieldProps {
  label: string;
  register: UseFormRegisterReturn;
  error: boolean;
  errorMessage: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, register, error, errorMessage, type }) => {
  const classes = useStyles();

  return (
    <label className={classes.label}>
      {label}:
      <input type={type} {...register} className={`${classes.input} ${error ? classes.inputError : ''}`} />
      {error && <span className={classes.errorText}>{errorMessage}</span>}
    </label>
  );
};

export default InputField;