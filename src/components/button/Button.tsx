import React from 'react';

import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

import { StyledButtonContainer, StyledButtonContent } from './Button.style';

const BUTTON_ACTIVE_OPACITY = 0.8;

interface ButtonProps extends RNTouchableOpacityProps {
  content?: React.ReactNode;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { content, ...touchableOpacityProps } = props;

  return (
    <StyledButtonContainer
      {...touchableOpacityProps}
      activeOpacity={BUTTON_ACTIVE_OPACITY}
    >
      <StyledButtonContent>{content}</StyledButtonContent>
    </StyledButtonContainer>
  );
};

export default Button;
