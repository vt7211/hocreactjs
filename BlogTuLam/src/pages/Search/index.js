import MainTitle from '../../common/MainTitle';
import Button from '../../common/Button';
import Col from '../../common/Col';
import Row from '../../common/Row';
import ArticleItem from '../../components/ArticleItem';
import Container from '../../common/Container';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { actFetchPostsSearchAsync } from '../../store/post/actions';

function SearchPage() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const obj = queryString.parse(location.search); // {}
  const searchStr = obj.q; // undefined
  const articlesPaging = useSelector(state => state.Post.articlesSearchPaging)
  const [loading, setLoading] = useState(false);
  const posts = articlesPaging.list;
  const { currentPage, totalPage, per_page, totalElement } = articlesPaging
  
  const hasMorePosts = currentPage < totalPage;

  useEffect(() => {
    dispatch(actFetchPostsSearchAsync({
      page: 1,
      search: searchStr
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStr]);

  async function handleLoadMore() {
    if (hasMorePosts === false || loading === true) {
      return;
    }

    setLoading(true); 
    const actionAsync = actFetchPostsSearchAsync({
      per_page,
      search: searchStr, //
      page: currentPage + 1,
    })

    await dispatch(actionAsync);
    setLoading(false);
  }

  if (!searchStr) {
    history.push('/');
  }


  return (
    <div className="articles-list section">
      <Container>
        <MainTitle isSearch >{totalElement} Kết quả tìm kiếm cho từ khoá "{searchStr}"</MainTitle>

        <Row className="tcl-jc-center">
          {
            posts.map(post => {
              return (
                <Col xs={12} md={8} key={post.id}>
                  <ArticleItem isStyleCard isShowCategories post={post} />
                </Col>
              )
            })
          }
        </Row>
        {
          hasMorePosts && (
            <div className="text-center">
              <Button
                type="primary"
                isSizeLarge
                isLoading={loading}
                onClick={handleLoadMore}
              >
                Tải thêm
              </Button>
            </div>
          )
        }
      </Container>
    </div>

  )
}

export default SearchPage;