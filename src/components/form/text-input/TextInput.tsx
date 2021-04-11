import React, { useState } from 'react';
import { StyledTextInput, StyledTextInputContainer } from './TextInput.style';

interface TextInputProps {
  style?: Record<string, unknown>;
}

const TextInput = (props: TextInputProps): JSX.Element => {
  const { style } = props;

  const [text, setText] = useState('');

  const handleTextChange = (updatedText: string): void => {
    setText(updatedText);
  };

  return (
    <StyledTextInputContainer style={style}>
      <StyledTextInput onChangeText={handleTextChange} value={text} />
    </StyledTextInputContainer>
  );
};

export default TextInput;
