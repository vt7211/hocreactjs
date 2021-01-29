import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://www.tibs.org.tw/images/default.jpg';

export default function ArticleItemThumbnail({
    thumbnail,
    slugLink,
    title,
}) {
    return (
        <Link to={slugLink}>
            <img src={thumbnail || DEFAULT_IMAGE} alt={title}/>
        </Link>
    )
}