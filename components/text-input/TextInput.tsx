import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  useColorScheme,
  Text,
  View,
} from "react-native";

import colors from "../../constants/Colors";
import createStyles from "./TextInput.style";

interface TextInputProps extends RNTextInputProps {
  label: string;
}

const TextInput = (props: TextInputProps) => {
  const { label, ...textInputProps } = props;

  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const [text, setText] = useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.floatingLabel}>{label}</Text>
      <RNTextInput
        onChangeText={setText}
        // TODO: add default color scheme
        selectionColor={colors[colorScheme ?? "light"].themedBackground}
        style={styles.input}
        value={text}
        {...textInputProps}
      />
    </View>
  );
};

export default TextInput;
