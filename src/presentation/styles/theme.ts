import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

export const defaultFontFamily = "Roboto";
export const logoFontFamily = "Caveat";

const fontConfig = {
  fontFamily: defaultFontFamily,
};

export const appTheme: ThemeProp = {
  ...DefaultTheme,
  // custom properties
  colors: {
    primary: "rgb(0, 107, 94)",
    onPrimary: "rgb(255, 255, 255)",
    onPrimaryContainer: "rgb(0, 32, 27)",
    secondary: "rgb(74, 99, 94)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(205, 232, 225)",
    onSecondaryContainer: "rgb(6, 32, 27)",
    tertiary: "rgb(68, 97, 121)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(202, 230, 255)",
    onTertiaryContainer: "rgb(0, 30, 48)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 251)",
    onBackground: "rgb(25, 28, 27)",
    surface: "rgb(250, 253, 251)",
    onSurface: "rgb(25, 28, 27)",
    surfaceVariant: "rgb(218, 229, 225)",
    onSurfaceVariant: "rgb(63, 73, 70)",
    outline: "rgb(111, 121, 118)",
    outlineVariant: "rgb(190, 201, 197)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(45, 49, 48)",
    inverseOnSurface: "rgb(239, 241, 239)",
    inversePrimary: "rgb(85, 219, 198)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 243)",
      level2: "rgb(230, 241, 238)",
      level3: "rgb(223, 237, 234)",
      level4: "rgb(220, 236, 232)",
      level5: "rgb(215, 233, 229)",
    },
    surfaceDisabled: "rgba(25, 28, 27, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
  fonts: configureFonts({
    config: fontConfig,
  }),
  // fonts: {
  // default: {
  //   fontFamily: defaultFont,
  // },
  // bodySmall: {
  //   fontFamily: defaultFont,
  //   fontSize: 12,
  //   fontWeight: "400",
  //   letterSpacing: 0.4,
  //   lineHeight: 16,
  // },
  // bodyMedium: {
  //   fontFamily: defaultFont,
  //   fontSize: 14,
  //   fontWeight: "400",
  //   letterSpacing: 0.25,
  //   lineHeight: 20,
  // },
  // bodyLarge: {
  //   fontFamily: defaultFont,
  //   fontSize: 16,
  //   fontWeight: "400",
  //   letterSpacing: 0.15,
  //   lineHeight: 24,
  // },
  // titleMedium: {
  //   fontFamily: defaultFont,
  //   fontSize: 16,
  //   fontWeight: "500",
  //   letterSpacing: 0.15,
  //   lineHeight: 24,
  // },
  // titleLarge: {
  //   fontFamily: defaultFont,
  //   fontSize: 22,
  //   fontWeight: "400",
  //   letterSpacing: 0,
  //   lineHeight: 28,
  // },
  // },
  // }
};
