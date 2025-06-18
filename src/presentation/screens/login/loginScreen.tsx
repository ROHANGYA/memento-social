import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import MementoTextInput from "../../components/mementoTextInput";
import { globalStyles } from "../../styles/globalStyles";
import { StackActions, useNavigation } from "@react-navigation/native";
import MementoButton from "../../components/mementoButton";
import { useLocalisation } from "../../../lang/lang";
import { Routes } from "../../navigation/routes";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginStatus,
  loginUser,
  resetState,
} from "../../state/login/loginSlice";
import LoadingPlaceholder from "../../components/loadingPlaceholder";
import ErrorPlaceholder from "../../components/errorPlaceholder";
import { useEffect, useRef } from "react";
import { logoFontFamily } from "../../styles/theme";

function LoginScreen() {
  const strings = useLocalisation();
  const navigation = useNavigation();

  const state = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch<AppDispatch>();

  const email = useRef("");
  const password = useRef("");

  useEffect(() => {
    if (state.status === LoginStatus.LoginSuccess) {
      navigation.dispatch(StackActions.push(Routes.Main));
      dispatch(resetState());
    }
  });

  if (state.status === LoginStatus.LoginLoading) {
    return scaffold(<LoadingPlaceholder />);
  }

  if (state.status === LoginStatus.LoginLoadingFailed) {
    return scaffold(
      <ErrorPlaceholder
        failure={{}}
        OnRetryClick={() => dispatch(resetState())}
      />
    );
  }

  return scaffold(
    <>
      <Text style={styles.textTitle}>{strings.mementoSocial}</Text>
      <Text style={styles.text}>{strings.loginToYourAccount}</Text>
      <MementoTextInput
        ref={email}
        hint={strings.enterYourEmail}
        leftIcon={"account-circle-outline"}
      />
      <MementoTextInput
        ref={password}
        hint={strings.enterYourPassword}
        leftIcon={"lock-outline"}
        isPasswordField={true}
      />
      <MementoButton
        label={strings.Signin}
        mode={"contained"}
        isFullwidth={true}
        onPress={() => {
          console.log(`email: ${email.current} --- pass: ${password.current}`);
          dispatch(
            loginUser({ email: email.current, password: password.current })
          );
        }}
      />
      <View style={styles.buttonPadding} />
      <MementoButton
        label={strings.forgotPassword}
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
    fontSize: 48,
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
