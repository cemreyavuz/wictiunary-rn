import React from 'react';

import LoginForm, {
  LoginFormValues,
} from '../../../components/forms/auth/login/LoginForm';
import Screen from '../../../components/screen/Screen';

import { StyledLoginContainer } from './Login.style';

const Login = (): JSX.Element => {
  const handleSubmit = (values: LoginFormValues): void => {
    console.log(values);
  };

  return (
    <Screen title="Login">
      <StyledLoginContainer>
        <LoginForm onSubmit={handleSubmit} />
      </StyledLoginContainer>
    </Screen>
  );
};

export default Login;
