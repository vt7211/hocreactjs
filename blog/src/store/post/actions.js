import { PostService } from "../../services/post";

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';
export const ACT_FETCH_LIST_POSTS = 'ACT_FETCH_LIST_POSTS';

// Action creator
export function actFetchLatestPosts({ posts = [] } = {}) {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPopularPosts({ posts = [] } = {}) {
  // console.log("actFetchPopularPosts",posts);
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchListPosts({ posts = [], page = 1 } = {}) {
  // console.log("actFetchPopularPosts",posts);
  return {
    type: ACT_FETCH_LIST_POSTS,
    payload: {
      posts,
      page
    }
  }
}


// Action async
export const actFetchLatestPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getLatestPosts();
      const posts = response.data;
      
      dispatch(actFetchLatestPosts({
        posts
      }))

    } catch(e) {

    }
  }
}
export const actFetchPopularPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getPopularPosts();
      const posts = response.data;
      
      dispatch(actFetchPopularPosts({
        posts
      }))

    } catch(e) {

    }
  }
}
export const actFetchListPostsAsync = () => {
  return async (dispatch, getState) => {
    try {
      let pageHome = getState().Post.pageHome;
      const response = await PostService.getListPostsAll();
      
      console.log('pageHome',pageHome);
      const posts = response.data;
      const page = 1;
      dispatch(actFetchListPosts({
        posts,
        page
      }))

    } catch(e) {

    }
  }
}