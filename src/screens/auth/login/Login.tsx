import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../../types';
import LoginForm, {
  LoginFormValues,
} from '../../../components/forms/auth/login/LoginForm';
import Screen from '../../../components/screen/Screen';

import { StyledLoginContainer } from './Login.style';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Login = (props: LoginProps): JSX.Element => {
  const { navigation } = props;

  const handleSubmit = (values: LoginFormValues): void => {
    console.log(values);
    navigation.push('Home');
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
