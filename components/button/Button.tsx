import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import createStyles from './Button.style';

const BUTTON_ACTIVE_OPACITY = 0.85;

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { onPress, text } = props;

  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <TouchableOpacity
      activeOpacity={BUTTON_ACTIVE_OPACITY}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.content}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
