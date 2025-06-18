import { StyleSheet, View } from "react-native";
import MementoButton from "../../components/mementoButton";
import { Text } from "react-native-paper";

type HomeErrorFooterProps = {
  errorMessage: string;
  retryLabel: string;
  onRetryClick: () => void;
};

function HomeErrorFooter({
  errorMessage,
  retryLabel,
  onRetryClick,
}: HomeErrorFooterProps) {
  return (
    <View style={styles.errorFooter}>
      <Text>{errorMessage}</Text>
      <MementoButton
        label={retryLabel}
        mode={"outlined"}
        onPress={onRetryClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingVertical: 28,
  },
});

export default HomeErrorFooter;
