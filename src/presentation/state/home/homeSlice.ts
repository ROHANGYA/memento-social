import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FailureEntity from "../../../domain/entities/failureEntity";
import Post, { mockPostList } from "../../../domain/entities/post";

export interface HomeState {
  status: HomeStatus;
  pageNumber: number;
  posts: Post[];
  error: string | null;
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
};

export const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    loadNextPage: (state) => {
      state.status =
        state.pageNumber === 0
          ? HomeStatus.LoadingPosts
          : HomeStatus.LoadingNextPosts;
      state.pageNumber = state.pageNumber + 1;
    },
    postsLoaded: (state, data: PayloadAction<Post[]>) => {
      state.status = HomeStatus.LoadedPosts;
      state.posts = data.payload;
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

export const fetchPosts = createAsyncThunk<void, void>(
  "fetch posts",
  async (_, thunk) => {
    thunk.dispatch(homeSlice.actions.loadNextPage());

    // TODO: add repository or use-case call.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = mockPostList;

    if (result instanceof FailureEntity) {
      thunk.dispatch(
        homeSlice.actions.failedToLoadPosts(FailureEntity.toJson(result))
      );
    } else {
      thunk.dispatch(homeSlice.actions.postsLoaded(result));
    }
  }
);

export const {} = homeSlice.actions;

export default homeSlice.reducer;
