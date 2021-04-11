import { font, FontStyle } from '../../common/theme/mixins';
import styled from '../../common/theme/styled';

export const StyledLoginContainer = styled.View`
  height: 100%;
`;

export const StyledLoginInputContainer = styled.Text`
  margin: 24px 24px 0 24px;

  color: ${({ theme }) => theme.colors.textColorPrimary};

  ${font(FontStyle.Body)}
`;
