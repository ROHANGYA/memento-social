import React, { useState } from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";
import { AssetUtil } from "../../utils/assetUtil";

type Props = {
  style: StyleProp<ImageStyle>;
  resizeMode: ImageProps["resizeMode"];
  source: ImageSourcePropType | null;
};

function ImageLoader({ style, resizeMode, source }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <View style={style}>
      {!!source ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={style}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      ) : (
        <Placeholder loaded={loaded} style={style} />
      )}
    </View>
  );
}

type PlaceholderProps = {
  loaded: boolean;
  style: StyleProp<ImageStyle>;
};
function Placeholder({ loaded, style }: PlaceholderProps) {
  if (loaded) {
    return null;
  } else {
    return <Image style={style} source={AssetUtil.imagePlaceholder} />;
  }
}

export default ImageLoader;
