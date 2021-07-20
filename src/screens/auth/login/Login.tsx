import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../../types';
import LoginForm, {
  LoginFormValues,
} from '../../../components/forms/auth/login/LoginForm';
import Screen from '../../../components/screen/Screen';

import {
  StyledLoginContainer,
  StyledNavigateToRegisterPageButton,
  StyledNavigateToRegisterPageButtonContainer,
  StyledNavigateToRegisterPageButtonContent,
} from './Login.style';
import { BUTTON_ACTIVE_OPACITY } from '../../../components/button/Button';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Login = (props: LoginProps): JSX.Element => {
  const { navigation } = props;

  const handleSubmit = (values: LoginFormValues): void => {
    console.log(values);
    navigation.push('Home');
  };

  const navigateToRegisterPage = (): void => {
    // TODO: comment out when register page is implemented
    // navigation.push('Register');
  };

  return (
    <Screen title="Login">
      <StyledLoginContainer>
        <LoginForm onSubmit={handleSubmit} />
        <StyledNavigateToRegisterPageButtonContainer>
          <StyledNavigateToRegisterPageButton
            activeOpacity={BUTTON_ACTIVE_OPACITY}
            onPress={navigateToRegisterPage}
          >
            <StyledNavigateToRegisterPageButtonContent>
              Create a wictiunary account{/* TODO: add localization */}
            </StyledNavigateToRegisterPageButtonContent>
          </StyledNavigateToRegisterPageButton>
        </StyledNavigateToRegisterPageButtonContainer>
      </StyledLoginContainer>
    </Screen>
  );
};

export default Login;
