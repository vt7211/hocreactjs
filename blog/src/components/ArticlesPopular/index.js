import './ArticlesPopular.css';
import { useSelector } from 'react-redux';
import MainTitle from "../../common/MainTitle";
import Container from '../../common/Container';

import ArticleItem from "../ArticleItem";

export default function ArticlesPopular() {
    const posts = useSelector(state => state.Post.articlesPopular)

    return (
        <div className="popular-news section bg-white-blue">
            <Container> 
                <MainTitle 
                    isShowBtn 
                    btnProps={{
                        htmlType: 'a',
                        href: '/posts',
                        btnText: 'View more'
                    }}>Popular Articles</MainTitle>

                <div className="popular-news__list spacing">
                    <div className="popular-news__list--left">
                        <div className="popular-news__list--row">
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard post={posts[0]} isShowDesc isShowCategories />
                            </div>
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard post={posts[1]} isShowDesc isShowCategories />
                            </div>
                        </div>
                    </div>
                    <div className="popular-news__list--right">
                        <div className="popular-news__list--row">
                            <div className="popular-news__list--card">
                                <ArticleItem isStyleCard isStyleRow post={posts[2]} isShowDesc isShowCategories />
                            </div>
                        </div>
                    </div>
                </div> 
            </Container>
        </div>
    )
}