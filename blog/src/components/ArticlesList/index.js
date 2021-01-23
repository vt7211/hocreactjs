import './ArticlesPopular.css';

import MainTitle from "../../common/MainTitle";
import Container from '../../common/Container';
import {useSelector} from 'react-redux';

import ArticleItem from "../ArticleItem";
// import {last, remove} from 'lodash';


export default function ArticlesList() {
    let count = 0;
    const posts = useSelector(state => state.Post.articlesList);
    
    return (

        // list sesstion 
        <div className="articles-list section">
        <div className="tcl-container">
            {/* Main Title */}
            <MainTitle 
            isShowBtn 
            btnProps={{
                htmlType: 'a',
                href: '/posts',
                btnText: 'View more'
            }}>News List</MainTitle>
            {/* End Main Title */}
            {/* End Row News List */}
            <div className="tcl-row">
                <div className="tcl-col-12 tcl-col-md-6">
                    {
                    posts.map((post, key) => {
                        count++;
                        if(count === 3) return null;
                        return (
                            <div key={key} className="tcl-col-12 tcl-col-md-6">
                                <ArticleItem post={post} isStyleCard />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            {/* End Row News List */}
            {/* Btn Loadmore */}
            <div className="text-center">
                <button className="btn btn-primary btn-size-large">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                    </circle>
                    </svg>
                    Load more
                </button>
            </div>
        </div>
        </div>
    )
}