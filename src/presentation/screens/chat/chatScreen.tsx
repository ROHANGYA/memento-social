import {
  View,
  StyleSheet,
  ListRenderItemInfo,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "react-native-paper";
import MementoAppBar from "../../components/mementoAppBar";
import { useCallback, useRef, useState } from "react";
import Animated from "react-native-reanimated";
import { globalStyles } from "../../styles/globalStyles";
import MementoTextInput from "../../components/mementoTextInput";
import MementoButton from "../../components/mementoButton";
import Feather from "@expo/vector-icons/build/Feather";
import MementoChatBubble from "../../components/mementoChatBubble";
import { useLocalisation } from "../../../lang/lang";

function ChatScreen() {
  const [bubbles, setBubbles] = useState<string[]>([]);
  const theme = useTheme();
  const strings = useLocalisation();
  const inputTextField = useRef("");

  const renderChatBubble = useCallback(
    (info: ListRenderItemInfo<String>) => {
      return (
        <MementoChatBubble
          id={info.index.toString()}
          onLongPress={() => {
            setBubbles((state) =>
              state.filter((item, index) => index != info.index)
            );
          }}
          body={info.item.toString()}
        />
      );
    },
    [bubbles]
  );

  return (
    <View style={[globalStyles.baseScreenStyle, styles.container]}>
      <MementoAppBar title={"Chat"} />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Animated.FlatList
          inverted={true}
          data={bubbles}
          keyExtractor={(item: string, index: number) => index.toString()}
          style={[globalStyles.screenPaddings]}
          renderItem={renderChatBubble}
          keyboardShouldPersistTaps="always"
          ListFooterComponent={<View style={styles.listBottom} />}
        />
        <View style={[styles.chatInputContainer]}>
          <View style={styles.chatInput}>
            <MementoTextInput
              hint={strings.enterYourMessageHere}
              ref={inputTextField}
            />
          </View>
          <View style={styles.chatButton}>
            <MementoButton
              mode={"icon"}
              icon={() => (
                <Feather name="send" size={32} color={theme.colors.primary} />
              )}
              onPress={() => {
                const userInput = inputTextField.current;
                if (userInput.length == 0) {
                  return;
                }
                setBubbles((state) => [userInput, ...state]);
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listBottom: { height: 30 },
  chatContainerLeft: {
    alignSelf: "flex-start",
  },
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
  chatInputContainer: {
    flexDirection: "row",
    paddingHorizontal: globalStyles.screenPaddings.paddingHorizontal,
    paddingVertical: 10,
    gap: 8,
    alignItems: "center",
  },
  chatInput: {
    flex: 1,
  },
  chatButton: {
    flexShrink: 1,
  },
});

export default ChatScreen;
