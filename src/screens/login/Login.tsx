import React from 'react';

import Screen from '../../components/screen/Screen';
import { StyledLoginContainer, StyledLoginInputContainer } from './Login.style';

interface LoginProps {}

const Login = (props: LoginProps): JSX.Element => {
  return (
    <Screen title="Login">
      <StyledLoginContainer>
        <StyledLoginInputContainer>Input 1</StyledLoginInputContainer>
        <StyledLoginInputContainer>Input 2</StyledLoginInputContainer>
      </StyledLoginContainer>
    </Screen>
  );
};

export default Login;
