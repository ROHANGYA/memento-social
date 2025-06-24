import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

type MementoAppBarProps = {
  title: string;
  centered?: boolean;
  isSecondaryFont?: boolean;
  backAction?: () => void;
};

function MementoAppBar({
  title,
  centered,
  isSecondaryFont,
  backAction,
}: MementoAppBarProps) {
  return (
    <Appbar.Header elevated={true} style={styles.container}>
      {backAction ? <Appbar.BackAction onPress={backAction} /> : <></>}
      <Appbar.Content
        title={title}
        titleStyle={[
          styles.title,
          isSecondaryFont ? styles.secondaryFont : null,
          centered ? styles.centeredTitle : null,
        ]}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    elevation: 4,
  },
  title: {
    paddingHorizontal: globalStyles.screenPaddings.paddingHorizontal,
  },
  centeredTitle: {
    textAlign: "center",
  },
  secondaryFont: {
    fontFamily: "Caveat",
  },
});

export default MementoAppBar;
