import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticlesLatest from '../../components/ArticlesLatest';
import ArticlesPopular from '../../components/ArticlesPopular';
import ArticlesList from '../../components/ArticlesList';
import { 
  actFetchLatestPostsAsync, 
  actFetchPopularPostsAsync,
  actFetchListPostsAsync,
} from '../../store/post/actions';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchLatestPostsAsync());
    dispatch(actFetchPopularPostsAsync());
    dispatch(actFetchListPostsAsync());
  }, []);

  return (
    <main>
        <ArticlesLatest />
        <ArticlesPopular />
        <ArticlesList />
    </main>
  )
}