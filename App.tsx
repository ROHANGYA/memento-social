import { PaperProvider } from "react-native-paper";
import AppNavigation from "./src/presentation/navigation/navigation";
import { Provider } from "react-redux";
import { globalStore } from "./src/presentation/state/store";
import { appTheme } from "./src/presentation/styles/theme";
import { I18nextProvider } from "react-i18next";
import { i18nLocale } from "./src/lang/lang";
import { getLoadedFonts, useFonts } from "expo-font";
import { FontAssets } from "./src/utils/assetUtil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const [loaded, error] = useFonts({
    Caveat: FontAssets.caveat,
    Roboto: FontAssets.roboto,
  });
  console.log(`Loaded fonts: ${getLoadedFonts()}`);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={globalStore}>
        <I18nextProvider i18n={i18nLocale}>
          <PaperProvider theme={appTheme}>
            <AppNavigation />
          </PaperProvider>
        </I18nextProvider>
      </Provider>
    </QueryClientProvider>
  );
}
