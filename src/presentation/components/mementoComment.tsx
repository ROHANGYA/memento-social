import { StyleSheet, View } from "react-native";
import { percentageOfScreenWidth } from "../../utils/dimensionsUtil";
import { Text } from "react-native-paper";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import User from "../../domain/entities/user";
import ImageLoader from "./imageLoader";

type MementoCommentProps = {
  author: User;
  timestamp: String;
  body: string;
  numberOfLikes: number;
};

function MementoComment({
  author,
  timestamp,
  body,
  numberOfLikes,
}: MementoCommentProps) {
  return (
    <View style={styles.commentRow}>
      <ImageLoader
        style={styles.profileImage}
        resizeMode="cover"
        source={{ uri: author.profileImage }}
      />
      <View style={styles.commentBodyColumn}>
        <View style={styles.commentRowHeader}>
          <Text>{author.username}</Text>
          <Text>•</Text>
          <Text>{timestamp}</Text>
        </View>
        <Text style={styles.commentBody}>{body}</Text>
        <View style={styles.commentReactionRow}>
          <AntDesign name={"like2"} size={18} color="black" />
          <Text>{numberOfLikes}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    paddingTop: 40,
  },
  commentRowHeader: {
    flexDirection: "row",
    gap: 9,
  },
  commentBodyColumn: {
    flexDirection: "column",
    width: percentageOfScreenWidth(0.75),
    gap: 14,
  },
  commentBody: {
    paddingRight: 10,
  },
  commentReactionRow: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "flex-end",
    paddingEnd: 14,
  },
  profileImage: { height: 50, width: 50, borderRadius: 14 },
});

export default MementoComment;
