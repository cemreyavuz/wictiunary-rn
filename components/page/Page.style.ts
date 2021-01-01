import { ColorSchemeName, StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export default (colorScheme: ColorSchemeName) => {
  const themedColors = colors[colorScheme ?? "light"];

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    containerStatusBarFilled: {
      backgroundColor: themedColors.themedBackground,
    },
    content: {
      backgroundColor: themedColors.lightBackground,
      flex: 1,
    },
    header: {
      backgroundColor: themedColors.themedBackground,
      display: "flex",
      justifyContent: "center",
      height: 50,
      paddingHorizontal: 24,
    },
    headerText: {
      color: themedColors.themedTextColorPrimary,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
};
