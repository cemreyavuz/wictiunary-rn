const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const green4 = '#85D5BC';
const white = '#FFFFFF';
const lightGray1 = '#CED9E0';
const lightGray2 = '#D8E1E8';
const gray4 = '#A7B6C2';
const darkGray4 = '#30404D';
const vermilion2 = '#FB9274';

export default {
  light: {
    text: '#000',
    background: '#fff',
    borderColor: lightGray1,
    lightBackground: white,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    themedBackgroundPrimary: green4,
    themedBackgroundSecondary: vermilion2,
    themedTextColorPrimary: white,
    textColorPrimary: darkGray4,
    textColorSecondary: gray4,
    textColorTertiary: lightGray2,
    textColorInvertedPrimary: white,
  },
  dark: {
    text: '#fff',
    background: '#000',
    borderColor: lightGray1,
    lightBackground: white,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    themedBackgroundPrimary: green4,
    themedBackgroundSecondary: vermilion2,
    themedTextColorPrimary: white,
    textColorPrimary: darkGray4,
    textColorSecondary: gray4,
    textColorTertiary: lightGray2,
    textColorInvertedPrimary: white,
  },
};
