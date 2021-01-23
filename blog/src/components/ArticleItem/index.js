import './ArticleItem.css';

import ArticleItemInfor from "./ArticleItemInfor";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemThumbnail from "./ArticleItemThumbnail";
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
import cls from 'classnames';

export default function ArticleItem({
    post,
    isStyleRow,
    isStyleCard,
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

    const authorName = post.author_data.nickname;
    const authorAvatar = post.author_data.avatar;
    const authorLink = `/user/${post.author}`;

    const created = post.date;

    return (
        <article className={classes}>
            <ArticleItemThumbnail 
                title={title}
                slugLink={slugLink}
                thumbnail={thumbnail}
            />
            <div className="article-item__content">
                { isStyleCard && <ArticleItemCategories /> }
                { isStyleCard && <ArticleItemStats /> }
                
                <ArticleItemTitle 
                    title={title} 
                    slugLink={slugLink}
                />

                { isStyleCard && <ArticleItemDesc /> }
                <ArticleItemInfor 
                    created={created}
                    authorName={authorName}
                    authorLink={authorLink}
                    authorAvatar={authorAvatar}
                />
            </div>
        </article>
    )
}