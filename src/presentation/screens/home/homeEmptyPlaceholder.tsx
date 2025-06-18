import { StyleSheet, View } from "react-native";
import { AssetUtil } from "../../../utils/assetUtil";
import ImageLoader from "../../components/imageLoader";
import { Text } from "react-native-paper";
import MementoButton from "../../components/mementoButton";

type HomeEmptyPlaceholderProps = {
  title: string;
  description: string;
  retryLabel: string;
  onRetryClick: () => void;
};

function HomeEmptyPlaceholder({
  title,
  description,
  retryLabel,
  onRetryClick,
}: HomeEmptyPlaceholderProps) {
  return (
    <View style={styles.emptyPlaceholder}>
      <ImageLoader
        style={styles.emptyPlaceholderImage}
        resizeMode="contain"
        source={AssetUtil.warning}
      />
      <Text style={styles.emptyPlaceholderTitle}>{title}</Text>
      <Text>{description}</Text>
      <MementoButton
        label={retryLabel}
        mode={"outlined"}
        onPress={onRetryClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollContainer: {
    alignContent: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  scrollContainerFooter: {
    paddingBottom: 100,
  },
  postSeparator: {
    height: 54,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  loadingFooter: {
    width: "100%",
    paddingTop: 20,
  },
  errorFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingVertical: 28,
  },
  emptyPlaceholder: {
    paddingTop: 90,
    alignItems: "center",
    gap: 10,
  },
  emptyPlaceholderTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  emptyPlaceholderImage: {
    width: 80,
  },
});

export default HomeEmptyPlaceholder;
