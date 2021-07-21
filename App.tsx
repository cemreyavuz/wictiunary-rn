import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useTheme } from './src/common/theme/theme';
import { store } from './src/state/store/store';

const App = (): JSX.Element => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={useTheme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  }
};

export default App;
