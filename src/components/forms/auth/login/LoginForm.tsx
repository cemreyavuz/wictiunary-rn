import React from 'react';
import { Button } from 'react-native';

import { useFormik } from 'formik';

import TextInput from '../../../form/text-input/TextInput';
import Form from '../../common/form/Form';

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
    <Form>
      <TextInput onChangeText={handleChange('email')} value={values['email']} />
      <Button onPress={handleSubmit} title="Submit" />
    </Form>
  );
};

export default LoginForm;
