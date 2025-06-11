import { ActivityIndicator, StyleSheet } from "react-native";

function LoadingPlaceholder() {
  return (
    <ActivityIndicator style={styles.loading} size={40} color={"#000000"} />
  );
}

const styles = StyleSheet.create({
  loading: {
    width: "100%",
    height: "100%",
    paddingBottom: 100,
  },
});

export default LoadingPlaceholder;
