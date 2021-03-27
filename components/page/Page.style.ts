import { ColorSchemeName, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export default (colorScheme: ColorSchemeName) => {
  const themedColors = colors[colorScheme ?? 'light'];

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    containerStatusBarFilled: {
      backgroundColor: themedColors.themedBackgroundPrimary,
    },
    content: {
      backgroundColor: themedColors.lightBackground,
      flex: 1,
    },
    header: {
      backgroundColor: themedColors.themedBackgroundPrimary,
      display: 'flex',
      justifyContent: 'center',
      height: 50,
      paddingHorizontal: 24,
    },
    headerText: {
      color: themedColors.themedTextColorPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
};
