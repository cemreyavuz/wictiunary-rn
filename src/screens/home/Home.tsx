import React from 'react';

import Screen from '../../components/screen/Screen';

import { StyledHomeContainer, StyledHomeText } from './Home.style';

const Home = (): JSX.Element => {
  return (
    <Screen title="Home">
      <StyledHomeContainer>
        <StyledHomeText>Home</StyledHomeText>
      </StyledHomeContainer>
    </Screen>
  );
};

export default Home;
