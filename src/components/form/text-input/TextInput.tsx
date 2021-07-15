import React from 'react';
import { StyledTextInput, StyledTextInputContainer } from './TextInput.style';

interface TextInputProps {
  onChangeText?: (text: string) => void;
  placeholder?: string;
  style?: Record<string, unknown>;
  value?: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
  const { onChangeText, placeholder, style, value } = props;

  return (
    <StyledTextInputContainer style={style}>
      <StyledTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </StyledTextInputContainer>
  );
};

export default TextInput;
