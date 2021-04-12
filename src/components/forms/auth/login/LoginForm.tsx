import React from 'react';

import { useFormik } from 'formik';
import { StyledLoginFormContainer } from './LoginForm.style';
import TextInput from '../../../form/text-input/TextInput';
import { Button } from 'react-native';

interface LoginFormProps {}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledLoginFormContainer>
      <TextInput onChangeText={handleChange('email')} value={values['email']} />
      <Button onPress={handleSubmit} title="Submit" />
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
