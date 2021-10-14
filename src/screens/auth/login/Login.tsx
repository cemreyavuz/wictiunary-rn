import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import LoginForm, {
  LoginFormValues,
} from '../../../components/forms/auth/login/LoginForm';
import Screen from '../../../components/screen/Screen';
import { BUTTON_ACTIVE_OPACITY } from '../../../components/button/Button';
import { RootStackParamList } from '../../../../types';
import { useAppDispatch } from '../../../state/store/hooks';

import {
  StyledLoginContainer,
  StyledNavigateToRegisterPageButton,
  StyledNavigateToRegisterPageButtonContainer,
  StyledNavigateToRegisterPageButtonContent,
} from './Login.style';
import { login } from '../../../state/slices/authSlice';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Login = (props: LoginProps): JSX.Element => {
  const { navigation } = props;

  const dispatch = useAppDispatch();

  const handleSubmit = (values: LoginFormValues): void => {
    const { email, password } = values;

    dispatch(login({ email, password }));

    // TODO: make this dependent to response
    navigation.push('Home');
  };

  const navigateToRegisterPage = (): void => {
    navigation.push('Register');
  };

  return (
    <Screen
      title="Login" // TODO: add localization
    >
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
