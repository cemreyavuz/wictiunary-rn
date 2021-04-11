import { font, FontStyle } from '../../common/theme/mixins';
import styled from '../../common/theme/styled';
import TextInput from '../../components/form/text-input/TextInput';

export const StyledLoginContainer = styled.View`
  height: 100%;
`;

export const StyledTextInput = styled(TextInput)`
  margin: 24px;
`;

export const StyledLoginInputContainer = styled.Text`
  margin: 24px 24px 0 24px;

  color: ${({ theme }) => theme.colors.textColorPrimary};

  ${font(FontStyle.Body)}
`;
