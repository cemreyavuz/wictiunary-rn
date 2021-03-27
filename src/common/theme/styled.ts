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
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  WictiunaryTheme,
  object
>;

export {
  css,
  isStyledComponent,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  ThemeProvider,
  useTheme,
  withTheme,
};
export default styled;
