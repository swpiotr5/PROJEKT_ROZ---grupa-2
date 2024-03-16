import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  leftAppInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0 2rem',
    '& h1': {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#161A30', 
      },
      '& p': {
        fontSize: '1.5rem',
        textAlign: 'center',
        color: '#161A30',
    },
  },
});

const LeftAppInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.leftAppInfo}>
      <h1>GuardianVault</h1>
      <p>Twoje bezpieczne miejsce do przechowywania i zarządzania dokumentacją opieki zastępczej.</p>
    </div>
  );
};

export default LeftAppInfo;