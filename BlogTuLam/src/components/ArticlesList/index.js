import ArticleItem from '../ArticleItem';
// import MainTitle from '../../common/MainTitle';
// import Container from '../../common/Container';
import Button from '../../common/Button';
import { useDispatch, useSelector } from 'react-redux';
// import Col from '../../common/Col';
// import Row from '../../common/Row';
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

    setLoading(true);
    const actionAsync = actFetchPostsAsync({
      per_page,
      page: currentPage + 1,
    })

    await dispatch(actionAsync);
    setLoading(false);
  }

  // function handleLoadMore() {
  //   if (hasMorePosts === true) {
  //     // Viết dưới đây
  //   }
  // }

  return (
    <>
      <div id="blog" className="grid-layout post-3-columns" data-margin={15} data-item="post-item">
      {
        posts.map( (post, index) => {
          return (
              <ArticleItem key={post.id} isStyleCard post={post} />
          )
        })
      }
      </div>

      <div id="pagination" className="infinite-scroll">
        <a href="blog-masonry-infinite-scroll-2.html" />
      </div>

      {
        hasMorePosts && (
          <div id="showMore">
            <Button 
              type="primary" 
              isSizeLarge 
              isLoading={loading}
              onClick={handleLoadMore}
              htmlType="a"
              className="btn btn-rounded btn-light"
            >
              Tải thêm
            </Button>
            
          </div>
        )
      }
    </>
  )
}