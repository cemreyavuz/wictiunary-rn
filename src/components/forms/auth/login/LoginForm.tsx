import React from 'react';
import { Button } from 'react-native';

import { useFormik } from 'formik';

import TextInput from '../../../form/text-input/TextInput';
import Form from '../../common/form/Form';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit?: (values: LoginFormValues) => void;
}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { onSubmit } = props;

  const { handleChange, handleSubmit, values } = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => onSubmit?.(values),
  });

  return (
    <Form>
      <TextInput
        autoCompleteType="email"
        onChangeText={handleChange('email')}
        placeholder="Enter your email" // TODO: add localization
        value={values['email']}
      />
      <TextInput
        autoCompleteType="password"
        onChangeText={handleChange('password')}
        placeholder="Enter your password" // TODO: add localization
        secureTextEntry
        value={values['password']}
      />
      <Button onPress={() => handleSubmit()} title="Submit" />
    </Form>
  );
};

export default LoginForm;
