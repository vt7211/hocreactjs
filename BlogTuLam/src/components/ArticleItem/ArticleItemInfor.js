import { Link } from "react-router-dom";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemTitle from "./ArticleItemTitle";
import 'dayjs/locale/vi';

dayjs.locale('vi');
dayjs.extend(relativeTime);

const defaultAvatars = [
    '/images/pullDog.jpg',
    '/images/avatar2.jpg',
    '/images/avatar3.jpg',
    '/images/avatar4.jpg',
]

export default function ArticleItemInfor({
    created,
    title,
    slugLink,
    shortDesc,
    viewCount
}) {

    const createdDate = dayjs(created)
    const createdDateStr = createdDate.format('DD/MM/YYYY');
    const currentDate = dayjs();
    const relativeTimeStr = createdDate.from(currentDate);
    // const idxDefaultAvatar = authorId % defaultAvatars.length;
    

    return (
        <div className="post-item-description">
            <span className="post-meta-date"><i className="fa fa-calendar-o" />{relativeTimeStr}</span>
            <span className="post-meta-comments"><a href><i className="fa fa-comments-o" />33 Comments</a></span>
            
            <ArticleItemTitle 
                title={title} 
                slugLink={slugLink}
            />
            <ArticleItemDesc 
                shortDesc={shortDesc}
            />
            <Link to={slugLink} className="item-link">Chi tiết <i className="fa fa-arrow-right" /></Link>
        </div>

    )
}