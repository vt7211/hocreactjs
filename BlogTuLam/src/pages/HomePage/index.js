import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../common/Container';
import ArticlesLatest from '../../components/ArticlesLatest';
import ArticlesPopular from '../../components/ArticlesPopular';
import ArticlesList from '../../components/ArticlesList';
import { 
  // actFetchLatestPostsAsync, 
  // actFetchPopularPostsAsync, 
  actFetchPostsAsync
} from '../../store/post/actions';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actFetchLatestPostsAsync());
    // dispatch(actFetchPopularPostsAsync());
    dispatch(actFetchPostsAsync());
  }, []);

  return (
    <section id="page-content" className="p-t-30 p-b-15">
      <Container fluid>
          <ArticlesList/>
      </Container>
    </section>

  )
}
