import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import MementoTextInput from "../../components/mementoTextInput";
import { globalStyles } from "../../styles/globalStyles";
import { StackActions, useNavigation } from "@react-navigation/native";
import MementoButton from "../../components/mementoButton";
import { useLocalisation } from "../../../lang/lang";
import { logoFontFamily } from "../../styles/theme";
import { Routes } from "../../navigation/routes";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { LoginStatus } from "../../state/login/loginSlice";
import LoadingPlaceholder from "../../components/loadingPlaceholder";

function LoginScreen() {
  const strings = useLocalisation();
  const navigation = useNavigation();

  const state = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  if (state.status === LoginStatus.LoginLoading) {
    return scaffold(<LoadingPlaceholder />);
  }

  return scaffold(
    <>
      <Text style={styles.textTitle}>{strings.mementoSocial}</Text>
      <Text style={styles.text}>Login to your account</Text>
      <MementoTextInput
        hint={"Enter your email ..."}
        leftIcon={"account-circle-outline"}
      />
      <MementoTextInput
        hint={"Enter your password ..."}
        leftIcon={"lock-outline"}
        isPasswordField={true}
      />
      <MementoButton
        label={"Sign in"}
        mode={"contained"}
        onPress={() => {
          navigation.dispatch(StackActions.push(Routes.Main));
        }}
      />
      <View style={styles.buttonPadding} />
      <MementoButton
        label={"Forgot password ?"}
        mode={"text"}
        onPress={() => {}}
      />
    </>
  );
}

function scaffold(body: React.JSX.Element) {
  return (
    <View
      style={[
        globalStyles.baseScreenStyle,
        globalStyles.screenPaddings,
        styles.container,
      ]}
    >
      {body}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 30,
    fontFamily: logoFontFamily,
    padding: 40,
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 10,
  },
  buttonPadding: {
    height: 20,
  },
});

export default LoginScreen;
