import react from 'react';
import { createUseStyles } from 'react-jss';
import GuardianVaultLogo from '../../assets/GuardianVaultLogo.png';

const useStyles = createUseStyles({
  image: {
    width: '40%',
    height: 'auto',
  },
});

const FormHeader = () => {
  const classes = useStyles();
  return (
    <img src={GuardianVaultLogo} className={classes.image} alt="" />
  )
};

export default FormHeader;