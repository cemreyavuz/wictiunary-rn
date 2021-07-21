import React from 'react';

import { useFormik } from 'formik';

import Form from '../../common/form/Form';
import Button from '../../../button/Button';
import TextInput from '../../../form/text-input/TextInput';

export interface RegisterFormValues {
  email: string;
  password: string;
}

interface RegisterFormProps {
  onSubmit?: (values: RegisterFormValues) => void;
}

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  const { onSubmit } = props;

  const { handleChange, handleSubmit, values } = useFormik<RegisterFormValues>({
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
      <Button
        content="REGISTER" // TODO: add localization
        onPress={() => handleSubmit()}
      />
    </Form>
  );
};

export default RegisterForm;
