import React from 'react';
import LoginForm from '../../../components/forms/auth/login/LoginForm';

import Screen from '../../../components/screen/Screen';
import { StyledLoginContainer } from './Login.style';

const Login = (): JSX.Element => {
  return (
    <Screen title="Login">
      <StyledLoginContainer>
        <LoginForm />
      </StyledLoginContainer>
    </Screen>
  );
};

export default Login;
