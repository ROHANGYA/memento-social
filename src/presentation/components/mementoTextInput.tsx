import { TextInput, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import React, { RefObject, useState } from "react";
import { percentageOfScreenWidth } from "../../utils/dimensionsUtil";

type MementoTextInputProps = {
  leftIcon?: IconSource;
  hint: string;
  isPasswordField?: boolean;
  ref: RefObject<String>;
};

function MementoTextInput({
  leftIcon,
  hint,
  isPasswordField = false,
  ref,
}: MementoTextInputProps) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const theme = useTheme();

  function onTextChanged(newInput: string) {
    ref.current = newInput;
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: percentageOfScreenWidth(0.9),
    marginBottom: 20,
  },
});

export default MementoTextInput;
