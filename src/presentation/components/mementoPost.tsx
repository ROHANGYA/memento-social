import Post from "../../domain/entities/post";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ImageLoader from "./imageLoader";
import { Text } from "react-native-paper";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useState } from "react";

type MementoPostProps = {
  post: Post;
  onLikeClick: (isLiked: boolean) => void;
};

function MementoPost({ post }: MementoPostProps) {
  const [isLiked, setLike] = useState(false);

  return (
    <View>
      <View style={styles.profileRow}>
        <ImageLoader
          style={styles.profileImage}
          resizeMode="cover"
          source={{ uri: post.user.profileImage }}
        />
        <Text>{post.body}</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageLoader
          style={styles.image}
          resizeMode="cover"
          source={{ uri: post.image }}
        />
      </View>

      <TouchableOpacity
        style={styles.reactionsRow}
        onPress={() => setLike((state) => !state)}
      >
        <AntDesign name={isLiked ? "like1" : "like2"} size={24} color="black" />
        <Text>{post.numberOfLikes}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  profileRow: {
    flexDirection: "row",
  },
  profileImage: { height: 50, width: 20, borderRadius: 14 },
  image: {
    height: 200,
    borderRadius: 14,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  reactionsRow: {
    flexDirection: "row",
  },
});

export default MementoPost;
