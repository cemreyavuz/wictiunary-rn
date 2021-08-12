import React from 'react';

import {
  StyledScreenContainer,
  StyledScreenContent,
  StyledScreenHeader,
  StyledScreenTitle,
} from './Screen.style';

interface ScreenProps {
  children: React.ReactNode;
  isHeaderHidden?: boolean;
  title?: string;
}

const Screen = (props: ScreenProps): JSX.Element => {
  const { children, isHeaderHidden, title } = props;

  return (
    <StyledScreenContainer>
      {!isHeaderHidden && (
        <StyledScreenHeader>
          <StyledScreenTitle>{title}</StyledScreenTitle>
        </StyledScreenHeader>
      )}
      <StyledScreenContent>{children}</StyledScreenContent>
    </StyledScreenContainer>
  );
};

export default Screen;
