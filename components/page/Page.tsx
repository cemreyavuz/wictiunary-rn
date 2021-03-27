import React from 'react';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import createStyles from './Page.style';

interface PageProps {
  children: React.ReactChild;
  isStatusBarFilled?: boolean;
  title?: string;
}

const Page = (props: PageProps): JSX.Element => {
  const { children, isStatusBarFilled, title } = props;

  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...(isStatusBarFilled ? styles.containerStatusBarFilled : {}),
      }}
    >
      {title && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      <ScrollView style={styles.content}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Page;
