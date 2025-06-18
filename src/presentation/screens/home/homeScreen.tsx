import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import MementoAppBar from "../../components/mementoAppBar";
import { globalStyles } from "../../styles/globalStyles";
import Animated, { FadingTransition } from "react-native-reanimated";
import MementoPost from "../../components/mementoPost";
import Post from "../../../domain/entities/post";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { useLocalisation } from "../../../lang/lang";
import { AppDispatch, RootState } from "../../state/store";
import { fetchPosts, HomeStatus } from "../../state/home/homeSlice";
import LoadingPlaceholder from "../../components/loadingPlaceholder";
import ErrorPlaceholder from "../../components/errorPlaceholder";
import FailureEntity from "../../../domain/entities/failureEntity";
import HomeEmptyPlaceholder from "./homeEmptyPlaceholder";
import HomeLoadingFooter from "./homeLoadingFooter";
import HomeErrorFooter from "./homeErrorFooter";

function HomeScreen() {
  const strings = useLocalisation();
  const navigation = useNavigation();

  const state = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (state.status === HomeStatus.LoadingPosts) {
    return scaffold(<LoadingPlaceholder />);
  }

  if (state.status === HomeStatus.FailureToLoadPosts) {
    return scaffold(
      <ErrorPlaceholder
        failure={FailureEntity.fromJson(state.error ?? "")}
        OnRetryClick={() => {
          dispatch(fetchPosts({ isRefresh: true }));
        }}
      />
    );
  }

  return scaffold(
    <FlatList
      data={state.posts}
      //renderItem={useCallback(renderPostItem, [state.posts])}
      renderItem={renderPostItem}
      style={styles.scrollContainer}
      ItemSeparatorComponent={() => <View style={styles.postSeparator} />}
      ListEmptyComponent={HomeEmptyPlaceholder({
        title: strings.thereAreNoPostsYet,
        description: strings.PleaseTryAgainLaterOrAddOne,
        retryLabel: strings.retry,
        onRetryClick: () => dispatch(fetchPosts({ isRefresh: true })),
      })}
      onEndReachedThreshold={0.5}
      onEndReached={({ distanceFromEnd }) => {
        if (state.status === HomeStatus.LoadedPosts && !state.isLastPage) {
          dispatch(fetchPosts());
        }
      }}
      ListFooterComponent={resolveListFooterComponent(state.status)}
    />
  );

  function resolveListFooterComponent(state: HomeStatus) {
    let footerComponent = null;

    if (state === HomeStatus.LoadingNextPosts) {
      footerComponent = HomeLoadingFooter();
    } else if (state === HomeStatus.FailureToLoadNextPosts) {
      footerComponent = HomeErrorFooter({
        errorMessage: strings.errorLoadingMorePosts,
        retryLabel: strings.retry,
        onRetryClick: () => dispatch(fetchPosts({ isRefresh: true })),
      });
    }

    return <View style={styles.scrollContainerFooter}>{footerComponent}</View>;
  }

  function renderPostItem(info: ListRenderItemInfo<Post>) {
    return (
      <MementoPost
        key={info.index}
        post={info.item}
        onLikeClick={function (isLiked: boolean): void {}}
      />
    );
  }

  function scaffold(child: React.JSX.Element) {
    return (
      <Animated.View layout={FadingTransition}>
        <View style={[globalStyles.baseScreenStyle, styles.container]}>
          <MementoAppBar />
          {child}
        </View>
      </Animated.View>
    );
  }
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
  scrollContainerFooter: {
    paddingBottom: 100,
  },
  postSeparator: {
    height: 54,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  loadingFooter: {
    width: "100%",
    paddingTop: 20,
  },
  errorFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingVertical: 28,
  },
  emptyPlaceholder: {
    paddingTop: 90,
    alignItems: "center",
    gap: 10,
  },
  emptyPlaceholderTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  emptyPlaceholderImage: {
    width: 80,
  },
});

export default HomeScreen;
