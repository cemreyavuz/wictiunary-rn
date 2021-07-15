import styled from '../../../common/theme/styled';

export const StyledTextInputContainer = styled.View``;

export const StyledTextInput = styled.TextInput`
  height: 52px;
  padding: 8px 16px;

  color: ${({ theme }) => theme.colors.textColorPrimary};
  font-size: 16px;
  font-weight: 500;

  border: 1px solid ${({ theme }) => theme.colors.borderColorPrimary};
  border-radius: 4px;
`;
