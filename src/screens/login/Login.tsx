import React from 'react';

import Screen from '../../components/screen/Screen';
import {
  StyledLoginContainer,
  StyledLoginInputContainer,
  StyledTextInput,
} from './Login.style';

const Login = (): JSX.Element => {
  return (
    <Screen title="Login">
      <StyledLoginContainer>
        <StyledTextInput />
        <StyledLoginInputContainer>Input 3</StyledLoginInputContainer>
      </StyledLoginContainer>
    </Screen>
  );
};

export default Login;
