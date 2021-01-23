import { 
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS,
  ACT_FETCH_LIST_POSTS
} from "./actions";

const initPostState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesList: [],
  pageHome: 1
}

export default function reducer(state = initPostState, action) {
  switch (action.type) {
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...state,
        articlesLatest: action.payload.posts
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...state,
        articlesPopular: action.payload.posts
      }
    case ACT_FETCH_LIST_POSTS:
      return {
        ...state,
        articlesList: action.payload.posts,
        pageHome: action.pageHome.page
      }
    default:
      return state;
  }
  
}