import { ScrollView, StyleSheet, View } from "react-native";

import { mockPostList } from "../../../domain/entities/post";
import MementoPost from "../../components/mementoPost";
import { RootStackNavArguments } from "../../navigation/navigation";
import { Routes } from "../../navigation/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/globalStyles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { mockUser } from "../../../domain/entities/user";
import MementoComment from "../../components/mementoComment";

type PostDetailScreenProps = NativeStackScreenProps<
  RootStackNavArguments,
  Routes.PostDetails
>;

function PostDetailScreen({ navigation, route }: PostDetailScreenProps) {
  const navArg = route.params;

  console.log(`Post details for id: ${navArg.postId}`);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={[globalStyles.screenPaddings, styles.container]}>
          <MementoPost
            key={navArg.postId}
            post={mockPostList[0]}
            onLikeClick={function (isLiked: boolean): void {}}
          />

          <MementoComment
            author={mockUser}
            timestamp={"5 Mins ago"}
            body={
              " This is a sample comment, that is long and should be a good example to show how the screen renders it"
            }
            numberOfLikes={2}
          />

          <MementoComment
            author={mockUser}
            timestamp={"5 Mins ago"}
            body={
              " This is a sample comment, that is long and should be a good example to show how the screen renders it"
            }
            numberOfLikes={2}
          />
          <MementoComment
            author={mockUser}
            timestamp={"5 Mins ago"}
            body={
              " This is a sample comment, that is long and should be a good example to show how the screen renders it"
            }
            numberOfLikes={2}
          />
          <View style={styles.bottomPadding} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  bottomPadding: {
    height: 100,
  },
});

export default PostDetailScreen;
