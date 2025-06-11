import { TextInput, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import React, { useState } from "react";

type MementoTextInputProps = {
  leftIcon?: IconSource;
  hint: string;
  isPasswordField?: boolean;
};

function MementoTextInput({
  leftIcon,
  hint,
  isPasswordField = false,
}: MementoTextInputProps) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const theme = useTheme();

  return (
    <TextInput
      mode="outlined"
      secureTextEntry={isPasswordField === true && !isPasswordVisible}
      placeholder={hint}
      left={leftIcon && <TextInput.Icon icon={leftIcon} disabled={true} />}
      right={
        isPasswordField === true ? (
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            onPress={() => setPasswordVisibility((prev) => !prev)}
          />
        ) : undefined
      }
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginBottom: 20,
  },
});

export default MementoTextInput;
