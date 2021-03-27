import * as styledComponents from 'styled-components/native';
import { WictiunaryTheme } from './theme';

const {
  default: styled,
  css,
  isStyledComponent,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  useTheme,
  withTheme,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<WictiunaryTheme>;

export {
  css,
  isStyledComponent,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  useTheme,
  withTheme,
};
export default styled;
