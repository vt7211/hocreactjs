import ArticleItem from '../ArticleItem';
import MainTitle from '../../common/MainTitle';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import Col from '../../common/Col';
import Row from '../../common/Row';
import { actFetchPostsAsync } from '../../store/post/actions';
import { useState } from 'react';

export default function ArticlesList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Chưa tải
  const articlesPaging = useSelector(state => state.Post.articlesPaging)
  const posts = articlesPaging.list;
  const { currentPage, totalPage, per_page } = articlesPaging

  const hasMorePosts = currentPage < totalPage;

  async function handleLoadMore() {
    if (hasMorePosts === false || loading === true) {
      return;
    }

    setLoading(true); // Đã chuẩn bị dispatch một action rồi
    const actionAsync = actFetchPostsAsync({
      per_page,
      page: currentPage + 1,
    })

    await dispatch(actionAsync); // Chờ gọi API xong
    setLoading(false);
  }

  // function handleLoadMore() {
  //   if (hasMorePosts === true) {
  //     // Viết dưới đây
  //   }
  // }

  return (
    <div className="articles-list section">
      <Container>
        
        <MainTitle >Danh sách bài viết</MainTitle>
        
        <Row>
          {
            posts.map(post => {
              return (
                <Col xs={12} md={6} key={post.id}>
                  <ArticleItem isStyleCard post={post} />
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