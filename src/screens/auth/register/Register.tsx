import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import Screen from '../../../components/screen/Screen';
import { BUTTON_ACTIVE_OPACITY } from '../../../components/button/Button';
import { RootStackParamList } from '../../../../types';

import {
  StyledRegisterContainer,
  StyledNavigateToLoginPageButton,
  StyledNavigateToLoginPageButtonContainer,
  StyledNavigateToLoginPageButtonContent,
} from './Register.style';
import RegisterForm, {
  RegisterFormValues,
} from '../../../components/forms/auth/register/RegisterForm';

interface RegisterProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Register = (props: RegisterProps): JSX.Element => {
  const { navigation } = props;

  const handleSubmit = (values: RegisterFormValues): void => {
    console.log(values);
    navigation.replace('Login');
  };

  const navigateToLoginPage = (): void => {
    navigation.push('Login');
  };

  return (
    <Screen
      title="Register" // TODO: add localization
    >
      <StyledRegisterContainer>
        <RegisterForm onSubmit={handleSubmit} />
        <StyledNavigateToLoginPageButtonContainer>
          <StyledNavigateToLoginPageButton
            activeOpacity={BUTTON_ACTIVE_OPACITY}
            onPress={navigateToLoginPage}
          >
            <StyledNavigateToLoginPageButtonContent>
              Sign in with existing wictiunary account
              {/* TODO: add localization */}
            </StyledNavigateToLoginPageButtonContent>
          </StyledNavigateToLoginPageButton>
        </StyledNavigateToLoginPageButtonContainer>
      </StyledRegisterContainer>
    </Screen>
  );
};

export default Register;
