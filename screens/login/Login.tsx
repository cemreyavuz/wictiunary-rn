import React from "react";
import { Text, View } from "react-native";

import Page from "../../components/page/Page";
import useColorScheme from "../../hooks/useColorScheme";
import createStyles from "./Login.style";

const Login = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <Page isStatusBarFilled title="Login">
      <View style={styles.container}>
        <Text>Loginss</Text>
      </View>
    </Page>
  );
};

export default Login;
