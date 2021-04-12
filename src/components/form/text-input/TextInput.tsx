import React from 'react';
import { StyledTextInput, StyledTextInputContainer } from './TextInput.style';

interface TextInputProps {
  onChangeText?: (text: string) => void;
  style?: Record<string, unknown>;
  value?: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
  const { onChangeText, style, value } = props;

  return (
    <StyledTextInputContainer style={style}>
      <StyledTextInput onChangeText={onChangeText} value={value} />
    </StyledTextInputContainer>
  );
};

export default TextInput;
