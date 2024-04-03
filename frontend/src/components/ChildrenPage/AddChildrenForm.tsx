import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from 'axios';

const useStyles = createUseStyles({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',  
    },
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
<                       label className={classes.label}>
                            Imię:
                            <input type="text" {...register('name', { required: true })} className={`${classes.input} ${errors.name ? classes.inputError : ''}`} />
                            {errors.name && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <label className={classes.label}>
                            Nazwisko:
                            <input type="text" {...register('surname', { required: true })} className={`${classes.input} ${errors.surname ? classes.inputError : ''}`} />
                            {errors.surname && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <label className={classes.label}>
                            Data urodzenia:
                            <input type="date" {...register('dateOfBirth', { required: true })} className={`${classes.input} ${errors.dateOfBirth ? classes.inputError : ''}`} />
                            {errors.dateOfBirth && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <label className={classes.label}>
                            Miejsce urodzenia:
                            <input type="text" {...register('placeOfBirth', { required: true })} className={`${classes.input} ${errors.placeOfBirth ? classes.inputError : ''}`} />
                            {errors.placeOfBirth && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <label className={classes.label}>
                            Data przyjęcia:
                            <input type="date" {...register('dateOfAdmission', { required: true })} className={`${classes.input} ${errors.dateOfAdmission ? classes.inputError : ''}`} />
                            {errors.dateOfAdmission && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <label className={classes.label}>
                            Numer skierowania:
                            <input type="text" {...register('referralNumber', { required: true })} className={`${classes.input} ${errors.referralNumber ? classes.inputError : ''}`} />
                            {errors.referralNumber && <span className={classes.errorText}>To pole jest wymagane</span>}
                        </label>
                        <div className={classes.buttonsContainer}>
                            <button type="button" className={classes.button} onClick={onNextPage}>Dalej</button>
                            <button type="button" className={classes.button} onClick={handleClose}>Anuluj</button>
                        </div>
                    </>
                )}
                {page === 2 && (
                    <>
                        <label className={classes.label}>
                        Matka:
                        <input type="text" {...register('mother')} className={`${classes.input} ${errors.mother ? classes.inputError : ''}`} />
                        </label>
                        <label className={classes.label}>
                            Ojciec:
                            <input type="text" {...register('father')} className={`${classes.input} ${errors.father ? classes.inputError : ''}`} />
                        </label>
                        <label className={classes.label}>
                            Opiekun prawny:
                            <input type="text" {...register('legalGuardian')} className={`${classes.input} ${errors.legalGuardian ? classes.inputError : ''}`} />
                        </label>
                        <label className={classes.label}>
                            Rodzeństwo:
                            <input type="number" {...register('siblings', { min: 0, max: 10 })} className={`${classes.input} ${errors.siblings ? classes.inputError : ''}`} />
                        </label>
                        <label className={classes.label}>
                            Uwagi:
                            <textarea {...register('comments', { max: 250 })} className={classes.input} />
                        </label>
                        <label className={classes.label}>
                            Zdjęcie:
                            <input type="file" {...register('image')} />
                        </label>
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