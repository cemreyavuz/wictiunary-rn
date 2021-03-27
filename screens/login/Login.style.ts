import { ColorSchemeName, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export default (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      height: '100%',
    },
    inputContainer: {
      marginHorizontal: 24,
      marginTop: 24,
    },
  });
