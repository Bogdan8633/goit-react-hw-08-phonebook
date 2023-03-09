import TextField from 'shared/components/TextField/TextField';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import styles from './registerForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  console.log(state); //це треба буде прибрати !!!!

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField handleChange={handleChange} {...fields.name} />
      <TextField handleChange={handleChange} {...fields.email} />
      <TextField handleChange={handleChange} {...fields.password} />
    </form>
  );
};

export default RegisterForm;
