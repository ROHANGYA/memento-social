import { View, StyleSheet, ScrollView } from "react-native";
import MementoAppBar from "../../components/mementoAppBar";
import { globalStyles } from "../../styles/globalStyles";
import Animated, { FadingTransition } from "react-native-reanimated";
import MementoPost from "../../components/mementoPost";
import { mockPostList } from "../../../domain/entities/post";

function HomeScreen() {
  return (
    <Animated.View layout={FadingTransition}>
      <View style={[globalStyles.baseScreenStyle, styles.container]}>
        <MementoAppBar />
        <ScrollView style={styles.scrollContainer}>
          <MementoPost
            post={mockPostList[0]}
            onLikeClick={function (isLiked: boolean): void {}}
          />
        </ScrollView>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollContainer: {
    alignContent: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
});

export default HomeScreen;
