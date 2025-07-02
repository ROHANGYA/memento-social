import { View, StyleSheet, ListRenderItemInfo } from "react-native";
import MementoAppBar from "../../components/mementoAppBar";
import { globalStyles } from "../../styles/globalStyles";
import Animated from "react-native-reanimated";
import MementoPost from "../../components/mementoPost";
import Post from "../../../domain/entities/post";
import React, { useCallback, useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
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
import Constants from "../../../utils/constants";
import { Routes } from "../../navigation/routes";

function HomeScreen() {
  const strings = useLocalisation();
  const navigation = useNavigation();

  const state = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPostItem = useCallback(
    (info: ListRenderItemInfo<Post>) => {
      return (
        <MementoPost
          key={info.index}
          post={info.item}
          onPostClick={() => {
            navigation.dispatch(
              StackActions.push(Routes.PostDetails, { postId: info.index })
            );
          }}
          onLikeClick={(isLiked: boolean) => {}}
        />
      );
    },
    [state.posts]
  );

  if (state.status === HomeStatus.LoadingPosts) {
    return scaffold(
      <Animated.View
        entering={Constants.stateScreenTransitionEntry}
        exiting={Constants.stateScreenTransitionExit}
      >
        <LoadingPlaceholder />
      </Animated.View>
    );
  }

  if (state.status === HomeStatus.FailureToLoadPosts) {
    return scaffold(
      <Animated.View
        entering={Constants.stateScreenTransitionEntry}
        exiting={Constants.stateScreenTransitionExit}
      >
        <ErrorPlaceholder
          failure={FailureEntity.fromJson(state.error ?? "")}
          OnRetryClick={() => {
            dispatch(fetchPosts({ isRefresh: true }));
          }}
        />
      </Animated.View>
    );
  }

  return scaffold(
    <Animated.FlatList
      entering={Constants.stateScreenTransitionEntry}
      exiting={Constants.stateScreenTransitionExit}
      data={state.posts}
      refreshing={false}
      onRefresh={() => {
        dispatch(fetchPosts({ isRefresh: true }));
      }}
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
      ListFooterComponent={resolveListFooterComponent(
        state.status,
        state.isLastPage
      )}
    />
  );

  function scaffold(child: React.JSX.Element) {
    return (
      <View style={[globalStyles.baseScreenStyle, styles.container]}>
        <MementoAppBar
          title={strings.mementoSocial}
          centered={true}
          isSecondaryFont={true}
        />
        {child}
      </View>
    );
  }

  function resolveListFooterComponent(state: HomeStatus, isLastPage: boolean) {
    let footerComponent: React.JSX.Element | null = HomeLoadingFooter();

    if (isLastPage) {
      footerComponent = null;
    } else if (state === HomeStatus.FailureToLoadNextPosts) {
      footerComponent = HomeErrorFooter({
        errorMessage: strings.errorLoadingMorePosts,
        retryLabel: strings.retry,
        onRetryClick: () => dispatch(fetchPosts({ isRefresh: true })),
      });
    }

    return <View style={styles.scrollContainerFooter}>{footerComponent}</View>;
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
