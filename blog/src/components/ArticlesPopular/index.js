import './ArticlesPopular.css';

import MainTitle from "../../common/MainTitle";
import Container from '../../common/Container';
import {useSelector} from 'react-redux';

import ArticleItem from "../ArticleItem";
import {last, remove} from 'lodash';


export default function ArticlesPopular() {
    let count = 0;
    const posts = useSelector(state => state.Post.articlesPopular);
    if(!posts || posts.length === 0) return null;
    
    const post_last = last(posts);
    const post_first = posts.slice(0,-1);
    // const post_first = remove(posts, (e) => {
    //     return e.id === post_last.id
    // });
    console.log('com post_first', post_first);
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
                            {
                            post_first.map((post, key) => {
                                count++;
                                if(count === 3) return null;
                                return (
                                    <div key={key} className="popular-news__list--card">
                                        <ArticleItem post={post} isStyleCard />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="popular-news__list--right">
                        <div className="popular-news__list--row">
                            <div className="popular-news__list--card">
                                <ArticleItem post={post_last} isStyleCard isStyleRow />
                            </div>
                        </div>
                    </div>
                </div> 
            </Container>
        </div>
    )
}