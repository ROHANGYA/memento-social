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
    <View style={styles.card}>
      <View style={styles.profileRow}>
        <ImageLoader
          style={styles.profileImage}
          resizeMode="cover"
          source={{ uri: post.user.profileImage }}
        />
        <View>
          <Text>{post.user.username}</Text>
          <Text>12 july 2025</Text>
        </View>
      </View>
      <Text style={styles.postText}>{post.body}</Text>
      <View style={styles.imageContainer}>
        <ImageLoader
          style={styles.image}
          resizeMode="cover"
          source={{ uri: post.image }}
        />
      </View>

      <View style={styles.reactionsRow}>
        <TouchableOpacity
          style={styles.reactionItem}
          onPress={() => setLike((state) => !state)}
        >
          <AntDesign
            name={isLiked ? "like1" : "like2"}
            size={24}
            color="black"
          />
          <Text>{post.numberOfLikes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reactionItem} onPress={() => {}}>
          <AntDesign name="message1" size={24} color="black" />
          <Text>{post.numberOfLikes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 20,
  },
  profileRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  profileImage: { height: 50, width: 50, borderRadius: 14 },
  image: {
    height: 200,
    borderRadius: 14,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 4,
  },
  reactionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
    marginLeft: 18,
  },
  reactionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  postText: {
    marginStart: 16,
  },
});

export default MementoPost;
