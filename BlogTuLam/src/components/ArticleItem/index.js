// import './ArticleItem.css';

import ArticleItemInfor from "./ArticleItemInfor";
import ArticleItemThumbnail from "./ArticleItemThumbnail";
import ArticleItemCategories from './ArticleItemCategories';
import cls from 'classnames';

export default function ArticleItem({
    post,
    isStyleRow,
    isStyleCard,
    isShowDesc = false,
}) {
    const classes = cls('article-item', {
        'style-row': isStyleRow,
        'style-card': isStyleCard,
    })

    if (!post) {
        return null;
    }

    const title = post.title.rendered;
    const slugLink = `/post/${post.slug}`;
    const thumbnail = post.featured_media_url;

    // const authorId = post.author;
    // const authorName = post.author_data.nickname;
    // const authorAvatar = post.author_data.avatar;
    // const authorLink = `/user/${post.author}`;

    const created = post.date;

    const shortDesc = post.excerpt.rendered
    const viewCount = post.view_count;
    const categoriesId = post.categories;

    return (
        <div className="post-item border">
            <div className="post-item-wrap">
              <div className="post-image">
                
                <ArticleItemThumbnail 
                    title={title}
                    slugLink={slugLink}
                    thumbnail={thumbnail}
                />
                <ArticleItemCategories categoriesId={categoriesId} />
                <ArticleItemInfor 
                    created={created}
                    title={title} 
                    slugLink={slugLink}
                    shortDesc={shortDesc}
                    viewCount={viewCount}
                />
              </div>
              
            </div>
        </div>
    )
}