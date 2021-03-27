import { colors } from './colors';

const theme = {
  colors: {
    contentBackgroundColor: colors.white,
    headerBackgroundColor: colors.green4,
    textColorPrimary: colors.darkGray4,
    textColorSecondary: colors.lightGray2,
    textColorTertiary: colors.lightGray2,
    textColorInvertedPrimary: colors.white,
  },
};

export interface WictiunaryTheme {
  colors: { [key in keyof typeof theme.colors]: string };
}

export const useTheme = (): WictiunaryTheme => {
  return theme;
};
