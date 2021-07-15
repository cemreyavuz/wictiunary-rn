import styled from '../../../common/theme/styled';

export const StyledTextInputContainer = styled.View``;

export const StyledTextInput = styled.TextInput`
  height: 52px;

  color: black;

  border: 1px solid ${({ theme }) => theme.colors.borderColorPrimary};
  border-radius: 4px;
`;
