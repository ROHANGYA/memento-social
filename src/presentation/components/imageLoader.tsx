import React, { useState } from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import { AssetUtil } from "../../utils/assetUtil";

type Props = {
  style: StyleProp<ImageStyle>;
  resizeMode: ImageProps["resizeMode"];
  source: ImageSourcePropType | null;
};

function ImageLoader({ style, resizeMode, source }: Props) {
  const [showPlaceholder, setPlaceholder] = useState(true);
  return (
    <View style={style}>
      {!!source ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={style}
          onLoad={() => {
            setPlaceholder(false);
          }}
        />
      ) : (
        <Placeholder showPlaceholder={showPlaceholder} style={style} />
      )}
    </View>
  );
}

type PlaceholderProps = {
  showPlaceholder: boolean;
  style: StyleProp<ImageStyle>;
};
function Placeholder({ showPlaceholder, style }: PlaceholderProps) {
  if (showPlaceholder) {
    return (
      <Image
        style={[style, styles.placeholder]}
        source={AssetUtil.imagePlaceholder}
      />
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: "#f5f5f5",
    width: "auto",
  },
});

export default ImageLoader;
