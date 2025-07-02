import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

type MementoChatBubbleProps = {
  id: string;
  onLongPress: () => void;
  body: string;
};

function MementoChatBubble({ id, onLongPress, body }: MementoChatBubbleProps) {
  const theme = useTheme();

  return (
    <Animated.View
      key={id}
      // entering={SlideInDown.duration(600)}
      // exiting={SlideInDown.duration(600)}
      style={styles.chatContainerRight}
    >
      <TouchableOpacity onLongPress={onLongPress}>
        <Text
          style={[
            styles.chatText,
            {
              backgroundColor: theme.colors.primary,
              color: theme.colors.onPrimary,
            },
          ]}
        >
          {body}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  chatContainerRight: {
    alignSelf: "flex-end",
  },
  chatText: {
    borderRadius: 20,
    marginVertical: 6,
    padding: 12,
    width: "auto",
    paddingHorizontal: 20,
  },
});

export default MementoChatBubble;
