import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

type MementoButtonProps = {
  label: string;
  icon?: IconSource;
  mode: "text" | "contained" | "outlined";
  onPress: () => void;
};

function MementoButton({ label, icon, mode, onPress }: MementoButtonProps) {
  return (
    <Button icon={icon} mode={mode} onPress={onPress} style={styles.container}>
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
});

export default MementoButton;
