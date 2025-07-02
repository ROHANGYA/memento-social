import { TextInput, useTheme } from "react-native-paper";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import React, { RefObject, useState } from "react";

type MementoTextInputProps = {
  leftIcon?: IconSource;
  hint: string;
  isPasswordField?: boolean;
  enableKeyboardAvoidingView?: boolean;
  ref: RefObject<string>;
};

function MementoTextInput({
  leftIcon,
  hint,
  isPasswordField = false,
  enableKeyboardAvoidingView = false,
  ref,
}: MementoTextInputProps) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const theme = useTheme();

  function onTextChanged(newInput: string) {
    ref.current = newInput;
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={enableKeyboardAvoidingView}
    >
      <TextInput
        mode="outlined"
        secureTextEntry={isPasswordField === true && !isPasswordVisible}
        placeholder={hint}
        left={leftIcon && <TextInput.Icon icon={leftIcon} disabled={true} />}
        right={
          isPasswordField === true ? (
            <TextInput.Icon
              icon={isPasswordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisibility((prev) => !prev)}
            />
          ) : undefined
        }
        style={styles.container}
        onChangeText={onTextChanged}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MementoTextInput;
