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

const TextInput = (props: RNTextInputProps) => {
  const [text, setText] = useState<string>();

  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.floatingLabel}>label</Text>
      <RNTextInput
        onChangeText={setText}
        // TODO: add default color scheme
        selectionColor={colors[colorScheme ?? "light"].themedBackground}
        style={styles.input}
        value={text}
      />
    </View>
  );
};

export default TextInput;
