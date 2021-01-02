import { ColorSchemeName, StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export default (colorScheme: ColorSchemeName) => {
  const themedColors = colors[colorScheme ?? "light"];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: themedColors.themedBackgroundSecondary,
      borderRadius: 4,
      height: 48,
      justifyContent: "center",
    },
    content: {
      color: themedColors.textColorInvertedPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
};
