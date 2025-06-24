import { FadeIn, FadeOut } from "react-native-reanimated";

export default abstract class Constants {
  static stateFadeDurationMs = 300;
  static stateScreenTransitionEntry = FadeIn.duration(
    Constants.stateFadeDurationMs
  );
  static stateScreenTransitionExit = FadeOut.duration(
    Constants.stateFadeDurationMs
  );
}
