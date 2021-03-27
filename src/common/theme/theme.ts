import { DefaultTheme } from "styled-components";

export interface WictiunaryTheme extends DefaultTheme {
  colors: {
    headerBackgroundColor: string;
    contentBackgroundColor: string;
  };
}

export const useTheme = (): WictiunaryTheme => {
  return {
    colors: {
      contentBackgroundColor: "white",
      headerBackgroundColor: "blue",
    },
  };
};
