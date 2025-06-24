import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FailureEntity from "../../../domain/entities/failureEntity";
import Post, { mockPostList } from "../../../domain/entities/post";

export interface HomeState {
  status: HomeStatus;
  pageNumber: number;
  posts: Post[];
  error: string | null;
  isLastPage: boolean;
}

export enum HomeStatus {
  LoadingPosts,
  LoadedPosts,
  FailureToLoadPosts,
  LoadingNextPosts,
  FailureToLoadNextPosts,
}

const initialState: HomeState = {
  status: HomeStatus.LoadingPosts,
  pageNumber: 0,
  posts: [],
  error: null,
  isLastPage: false,
};

export const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    loadNextPage: (state) => {
      const isFirstPage = state.pageNumber === 0;
      if (isFirstPage) {
        state.status = HomeStatus.LoadingPosts;
      } else {
        state.status = HomeStatus.LoadingNextPosts;
      }
      state.pageNumber = state.pageNumber + 1;
    },
    postsLoaded: (state, data: PayloadAction<string[]>) => {
      state.status = HomeStatus.LoadedPosts;
      state.posts.push(...data.payload.map((post) => Post.fromJson(post)));
      state.isLastPage = data.payload.length == 0;
    },
    failedToLoadPosts: (state, error: PayloadAction<string>) => {
      state.status =
        state.pageNumber === 0
          ? HomeStatus.FailureToLoadPosts
          : HomeStatus.FailureToLoadNextPosts;
      state.error = error.payload;
    },
    resetState: (state) => initialState,
  },
});

export type fetchPostsParams = {
  isRefresh: boolean;
};

export const fetchPosts = createAsyncThunk<void, fetchPostsParams | undefined>(
  "fetch posts",
  async (params, thunk) => {
    params?.isRefresh
      ? thunk.dispatch(homeSlice.actions.resetState())
      : thunk.dispatch(homeSlice.actions.loadNextPage());

    // TODO: add repository or use-case call.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result: Post[] = mockPostList;

    if (result instanceof FailureEntity) {
      thunk.dispatch(
        homeSlice.actions.failedToLoadPosts(FailureEntity.toJson(result))
      );
    } else {
      thunk.dispatch(
        homeSlice.actions.postsLoaded(result.map((post) => Post.toJson(post)))
      );
    }
  }
);

export const {} = homeSlice.actions;

export default homeSlice.reducer;
