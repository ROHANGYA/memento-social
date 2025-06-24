import { ActivityIndicator, StyleSheet } from "react-native";

function HomeLoadingFooter() {
  return (
    <ActivityIndicator
      style={styles.loadingFooter}
      size={40}
      color={"#000000"}
    />
  );
}

const styles = StyleSheet.create({
  loadingFooter: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 30,
  },
});

export default HomeLoadingFooter;
