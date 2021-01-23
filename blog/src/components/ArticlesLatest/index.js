import './ArticlesLatest.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../../common/MainTitle';
import Container from '../../common/Container';
import { useSelector } from 'react-redux';

export default function ArticlesLatest() {
    const posts = useSelector(state => state.Post.articlesLatest)
    
    return (
        <div className="latest-news section">
            <Container>

                <MainTitle 
                    // isShowBtn 
                    btnProps={{ 
                        btnText: 'Xem thêm' 
                    }}
                >Bài viết gần đây</MainTitle>

                {/* Latest News List */}
                <div className="latest-news__list spacing">
                    {
                        posts.map((post) => {
                            return (
                                <div className="latest-news__card" key={post.id}>
                                    <ArticleItem post={post} />
                                </div>
                            )
                        })
                    }
                </div>
                {/* End Latest News List */}
            </Container>
        </div>
    );
}
