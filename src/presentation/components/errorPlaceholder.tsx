import { Image, StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FailureEntity from "../../domain/entities/failureEntity";
import { useLocalisation } from "../../lang/lang";
import { AssetUtil } from "../../utils/assetUtil";
import { Text } from "react-native-paper";
import { getDisplayMessage } from "../../utils/exceptionUtils";
import MementoButton from "./mementoButton";

type genericErrorScreenProps = PropsWithChildren<{
  failure: FailureEntity;
  OnRetryClick: () => void;
}>;

function ErrorPlaceholder({
  failure,
  OnRetryClick,
}: genericErrorScreenProps): React.JSX.Element {
  const strings = useLocalisation();
  console.log(failure);
  return (
    <View style={styles.container}>
      <Image source={AssetUtil.warning} style={styles.icon} />
      <Text style={styles.Title}>{strings.somethingWentWrong}</Text>
      <Text style={styles.details}>
        {failure.errorDescription ?? getDisplayMessage(failure)}
      </Text>
      <View style={styles.buttonSpacer} />
      <MementoButton
        label={strings.retry}
        mode={"outlined"}
        onPress={OnRetryClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 26,
    paddingBottom: 160,
  },
  icon: {
    width: 50,
    height: 50,
  },
  Title: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  details: {
    margin: 4,
    textAlign: "justify",
  },
  button: {
    margin: 28,
    color: "#000000",
    backgroundColor: Colors.grey,
    outlineColor: "#000000",
    outlineWidth: 1,
    borderRadius: 10,
  },
  buttonSpacer: {
    height: 20,
  },
});
export default ErrorPlaceholder;
