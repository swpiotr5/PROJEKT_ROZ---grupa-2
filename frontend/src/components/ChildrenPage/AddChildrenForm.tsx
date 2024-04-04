import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from 'axios';
import InputField from './InputField';

const useStyles = createUseStyles({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',  
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
    h2:{
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'center',
        gap: '1rem',
    },
    '@media (max-width: 768px)': {
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
    
    },
});

const customModalStyles = {
    content: {
        background: '#F0ECE5',
        border: '2px solid #31304D',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '2rem',
        width: 'clamp(300px, 80%, 600px)',
        margin: '0 auto',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const AddChildrenForm = ( { isOpen, onClose }: { isOpen: boolean, onClose: () => void } ) => {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [page, setPage] = useState(1);

    const onSubmit = (data : object) => {
        axios.post('http://localhost:8001/api/addChild', data)
          .then(response => {
            console.log('Dziecko zostało dodane:', response.data);
            reset();
            onClose();
          })
          .catch(error => {
            console.error('Błąd podczas dodawania dziecka:', error);
            reset();
            onClose();
          });
      };

      const handleClose = () => {
        reset();
        setPage(1);
        onClose();
      }

      const onNextPage = () => {
        setPage(2);
      };

      const onPrevPage = () => {
        setPage(1);
      };

    return (
        <Modal isOpen={isOpen} onRequestClose={handleClose} style={customModalStyles}>
            <h2 className={classes.h2}>Dodaj Dziecko</h2>
            <form id="addChildForm" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                {page === 1 && (
                    <>
                        <InputField
                            label="Imię"
                            register={register('name', { required: true })}
                            error={!!errors.name}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Nazwisko"
                            register={register('surname', { required: true })}
                            error={!!errors.surname}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Data urodzenia"
                            register={register('dateOfBirth', { required: true })}
                            error={!!errors.dateOfBirth}
                            errorMessage="To pole jest wymagane"
                            type="date"
                        />
                        <InputField
                            label="Miejsce urodzenia"
                            register={register('placeOfBirth', { required: true })}
                            error={!!errors.placeOfBirth}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Data przyjęcia"
                            register={register('dateOfAdmission', { required: true })}
                            error={!!errors.dateOfAdmission}
                            errorMessage="To pole jest wymagane"
                            type="date"
                        />
                        <InputField
                            label="Numer skierowania"
                            register={register('referralNumber', { required: true })}
                            error={!!errors.referralNumber}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <div className={classes.buttonsContainer}>
                            <button type="button" className={classes.button} onClick={onNextPage}>Dalej</button>
                            <button type="button" className={classes.button} onClick={handleClose}>Anuluj</button>
                        </div>
                    </>
                )}
                {page === 2 && (
                    <>
                        <InputField
                            label="Matka"
                            register={register('mother', { required: true })}
                            error={!!errors.mother}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Ojciec"
                            register={register('father', { required: true })}
                            error={!!errors.father}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Opiekun prawny"
                            register={register('legalGuardian', { required: true })}
                            error={!!errors.legalGuardian}
                            errorMessage="To pole jest wymagane"
                            type="text"
                        />
                        <InputField
                            label="Rodzeństwo"
                            register={register('siblings', { required: true })}
                            error={!!errors.siblings}
                            errorMessage="To pole jest wymagane"
                            type="number"
                        />
                        <InputField
                            label="Uwagi"
                            register={register('comments', { required: true })}
                            error={!!errors.legalGuardian}
                            errorMessage="To pole jest wymagane"
                            type="textarea"
                        />
                        <InputField
                            label="Zdjęcie"
                            register={register('image', { required: true })}
                            error={!!errors.legalGuardian}
                            errorMessage="To pole jest wymagane"
                            type="file"
                        />
                        <div className={classes.buttonsContainer}>
                            <button type="button" className={classes.button} onClick={onPrevPage}>Wstecz</button>
                            <button type="submit" form="addChildForm" className={classes.button}>Dodaj</button>
                        </div>
                    </>
                )}     
            </form>
        </Modal>
    );

};

export default AddChildrenForm;