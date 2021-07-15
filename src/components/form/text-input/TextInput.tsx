import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { StyledTextInput, StyledTextInputContainer } from './TextInput.style';

interface TextInputProps
  extends Pick<
    RNTextInputProps,
    'autoCompleteType' | 'placeholder' | 'secureTextEntry'
  > {
  onChangeText?: (text: string) => void;
  style?: Record<string, unknown>;
  value?: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
  const { onChangeText, style, value, ...rnTextInputProps } = props;

  return (
    <StyledTextInputContainer style={style}>
      <StyledTextInput
        onChangeText={onChangeText}
        value={value}
        {...rnTextInputProps}
      />
    </StyledTextInputContainer>
  );
};

export default TextInput;
