import styled from '../../common/theme/styled';

export const StyledButtonContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orangePrimary};
  border-radius: 4px;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100%;
`;

export const StyledButtonContent = styled.Text`
  color: ${({ theme }) => theme.colors.textColorInvertedPrimary};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;
