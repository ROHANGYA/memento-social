import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

function MementoAppBar() {
  return (
    <Appbar.Header elevated={true}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
});

export default MementoAppBar;
