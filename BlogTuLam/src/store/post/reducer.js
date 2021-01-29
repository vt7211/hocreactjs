import { 
  ACT_FETCH_POSTS,
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS,
  ACT_FETCH_POSTS_SEARCH
} from "./actions";

const initPostState = {
  articlesLatest: [],
  articlesPopular: [],
  // articlesList: [],
  articlesPaging: {
    list: [],
    currentPage: 1,
    totalPage: 1,
    per_page: 2
  },
  articlesSearchPaging: {
    list: [],
    currentPage: 1,
    totalPage: 1,
    per_page: 2
  }
}

export default function reducer(state = initPostState, action) {
  switch (action.type) {
    case ACT_FETCH_POSTS:
      return {
        ...state,
        articlesPaging: {
          list: action.payload.page === 1 
            ? action.payload.posts 
            : [
              ...state.articlesPaging.list,
              ...action.payload.posts
            ],
          currentPage: action.payload.page,
          totalPage: action.payload.totalPages,
          per_page: action.payload.per_page
        }
      }
    case ACT_FETCH_POSTS_SEARCH:
      // let listSearch = null;

      // if (action.payload.page === 1) {
      //   listSearch = action.payload.posts;
      // } else {
      //   listSearch = [
      //     ...state.articlesSearchPaging.list,
      //     ...action.payload.posts
      //   ]
      // }

      return {
        ...state,
        articlesSearchPaging: {
          list: action.payload.page === 1 
            ? action.payload.posts 
            : [
              ...state.articlesSearchPaging.list,
              ...action.payload.posts
            ],
          totalElement: action.payload.totalElement,
          currentPage: action.payload.page,
          totalPage: action.payload.totalPages,
          per_page: action.payload.per_page
        }
      }
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
    
    default:
      return state;
  }
  
}