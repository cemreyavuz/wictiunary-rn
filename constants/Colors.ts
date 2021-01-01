const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const green1 = "#39A784";
const green2 = "#49C19B";
const green3 = "#61C9A8";
const green4 = "#85D5BC";
const green5 = "#A4E0CD";

const white = "#FFFFFF";

export default {
  light: {
    text: "#000",
    background: "#fff",
    lightBackground: white,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    themedBackground: green4,
    themedTextColor: white,
  },
  dark: {
    text: "#fff",
    background: "#000",
    lightBackground: white,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    themedBackground: green4,
    themedTextColor: white,
  },
};
