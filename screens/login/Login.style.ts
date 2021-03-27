import { StyleSheet } from 'react-native';

export default (): Record<string, unknown> =>
  StyleSheet.create({
    container: {
      height: '100%',
    },
    inputContainer: {
      marginHorizontal: 24,
      marginTop: 24,
    },
  });
