import { Dimensions } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export abstract class DimensionsUtilConstants {
  static screenWidth = Dimensions.get("screen").width;
  static screenHeight = Dimensions.get("screen").height;
}

/// Function to return a width value as a percentage of the screen width
/// usage: percentageOfScreenWidth(0.4)
/// range: 0 - 1.0
export function percentageOfScreenWidth(percentage: Double) {
  if (percentage < 0 || percentage > 1) {
    throw "invalid percentage for width, stay within 0 - 1.0";
  }
  return DimensionsUtilConstants.screenWidth * percentage;
}
