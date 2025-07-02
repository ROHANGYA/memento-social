import { Button, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

type MementoButtonProps = {
  label?: string;
  icon?: IconSource;
  mode: "text" | "contained" | "outlined" | "icon";
  isFullwidth?: boolean;
  onPress: () => void;
};

function MementoButton({
  label,
  icon,
  mode,
  onPress,
  isFullwidth,
}: MementoButtonProps) {
  return mode === "icon" ? (
    <IconButton
      icon={icon ?? ""}
      onPress={onPress}
      style={[isFullwidth ? styles.fullWidth : null]}
    />
  ) : (
    <Button
      icon={icon}
      mode={mode}
      onPress={onPress}
      style={[styles.container, isFullwidth ? styles.fullWidth : null]}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
  },
  fullWidth: {
    width: "100%",
  },
});

export default MementoButton;
