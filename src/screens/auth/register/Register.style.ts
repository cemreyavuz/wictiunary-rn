import styled from '../../../common/theme/styled';

export const StyledRegisterContainer = styled.View`
  height: 100%;
`;

export const StyledNavigateToLoginPageButtonContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const StyledNavigateToLoginPageButton = styled.TouchableOpacity``;

export const StyledNavigateToLoginPageButtonContent = styled.Text`
  color: ${({ theme }) => theme.colors.textColorPrimary};
  font-size: 16px;
  font-weight: bold;
`;
