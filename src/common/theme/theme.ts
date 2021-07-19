import { colors } from './colors';

const theme = {
  colors: {
    // Common
    borderColorPrimary: colors.gray5,
    contentBackgroundColor: colors.white,
    headerBackgroundColor: colors.green4,
    // Orange
    orangePrimary: colors.orange3,
    orangeSecondary: colors.orange4,
    orangeTertiary: colors.orange5,
    // Text
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
