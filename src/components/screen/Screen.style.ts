import { SafeAreaView } from "react-native-safe-area-context";

import styled from "../../common/theme/styled";

export const StyledScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.headerBackgroundColor};
`;

export const StyledScreenHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.headerBackgroundColor};
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 0 24px;
`;

export const StyledScreenTitle = styled.Text`
  color: lightblue;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledScreenContent = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.contentBackgroundColor};
  flex: 1;
`;
