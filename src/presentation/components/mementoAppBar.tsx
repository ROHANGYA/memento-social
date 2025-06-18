import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

type MementoAppBarProps = {
  title: string;
  centered?: boolean;
  backAction?: () => void;
};

function MementoAppBar({ title, centered, backAction }: MementoAppBarProps) {
  return (
    <Appbar.Header elevated={true}>
      {backAction ? <Appbar.BackAction onPress={backAction} /> : <></>}
      <Appbar.Content
        title={title}
        titleStyle={centered ? styles.centeredTitle : null}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  centeredTitle: {
    textAlign: "center",
  },
});

export default MementoAppBar;
