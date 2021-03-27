import React from 'react';

import {
  StyledScreenContainer,
  StyledScreenContent,
  StyledScreenHeader,
  StyledScreenTitle,
} from './Screen.style';

interface ScreenProps {
  children: React.ReactNode;
  title: string;
}

const Screen = (props: ScreenProps): JSX.Element => {
  const { children, title } = props;

  return (
    <StyledScreenContainer>
      <StyledScreenHeader>
        <StyledScreenTitle>{title}</StyledScreenTitle>
      </StyledScreenHeader>
      <StyledScreenContent>{children}</StyledScreenContent>
    </StyledScreenContainer>
  );
};

export default Screen;
