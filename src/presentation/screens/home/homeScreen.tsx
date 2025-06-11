import { View, StyleSheet, ScrollView } from "react-native";
import MementoAppBar from "../../components/mementoAppBar";
import ImageLoader from "../../components/imageLoader";
import { globalStyles } from "../../styles/globalStyles";
import Animated, { FadingTransition } from "react-native-reanimated";

function HomeScreen() {
  return (
    <Animated.View layout={FadingTransition}>
      <View style={[globalStyles.baseScreenStyle, styles.container]}>
        <MementoAppBar />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>

          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageLoader
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/500/300" }}
            />
          </View>
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
  image: {
    height: 200,
    borderRadius: 14,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
});

export default HomeScreen;
