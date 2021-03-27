import { ColorSchemeName, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export default (
  colorScheme: ColorSchemeName,
): StyleSheet.NamedStyles<unknown> => {
  const themedColors = colors[colorScheme ?? 'light'];

  return StyleSheet.create({
    container: {
      borderColor: themedColors.borderColor,
      borderRadius: 4,
      borderWidth: 1,
      height: 64,
      position: 'relative',
    },
    floatingLabel: {
      color: themedColors.textColorSecondary,
      fontSize: 10,
      fontWeight: 'bold',
      left: 12,
      letterSpacing: 0.5,
      position: 'absolute',
      textTransform: 'uppercase',
      top: 8,
    },
    input: {
      color: themedColors.textColorPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal: 12,
      paddingBottom: 12,
      paddingTop: 32,
    },
  });
};
