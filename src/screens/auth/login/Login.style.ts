import styled from '../../../common/theme/styled';

export const StyledLoginContainer = styled.View`
  height: 100%;
`;

export const StyledNavigateToRegisterPageButtonContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const StyledNavigateToRegisterPageButton = styled.TouchableOpacity``;

export const StyledNavigateToRegisterPageButtonContent = styled.Text`
  color: ${({ theme }) => theme.colors.textColorPrimary};
  font-size: 16px;
  font-weight: bold;
`;
