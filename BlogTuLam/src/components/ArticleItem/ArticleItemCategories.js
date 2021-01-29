import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ArticleItemCategories({
    categoriesId
}) {
    const hashCategoryFromId = useSelector(state => state.Category.hashCategoryFromId);
    
    return (
        <ul className="article-item__categories">
            {
                categoriesId.map(cateId => {
                    const data = hashCategoryFromId[cateId];

                    if (!data) {
                        return null;
                    }

                    const slugLink = `/category/${data.slug}`;
                    return <span key={cateId} className="post-meta-category"><Link to={slugLink}>{data.name}</Link></span>
                })
            }
        </ul>
    )
}