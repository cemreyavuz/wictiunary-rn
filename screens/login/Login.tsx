import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/button/Button';

import Page from '../../components/page/Page';
import TextInput from '../../components/text-input/TextInput';
import useColorScheme from '../../hooks/useColorScheme';
import createStyles from './Login.style';

interface LoginFields {
  email: string;
  password: string;
}

const Login = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const [fields, setFields] = useState<LoginFields>({
    email: '',
    password: '',
  });

  const handleFieldChange = (fieldName: string) => (value: any) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const handlePress = (): void => {
    console.log(fields);
  };

  return (
    <Page isStatusBarFilled title="Login">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            onChangeText={handleFieldChange('email')}
            textContentType="emailAddress"
            value={fields.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Password"
            onChangeText={handleFieldChange('password')}
            secureTextEntry
            textContentType="password"
            value={fields.password}
          />
        </View>
        <View style={styles.inputContainer}>
          <Button onPress={handlePress} text="Login" />
        </View>
      </View>
    </Page>
  );
};

export default Login;
