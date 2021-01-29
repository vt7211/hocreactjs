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
    isShowDesc = false,
    isShowCategories = false,
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

    const authorId = post.author;
    const authorName = post.author_data.nickname;
    const authorAvatar = post.author_data.avatar;
    const authorLink = `/user/${post.author}`;

    const created = post.date;

    const shortDesc = post.excerpt.rendered
    const viewCount = post.view_count;
    const categoriesId = post.categories;

    return (
        <article className={classes}>
            <ArticleItemThumbnail 
                title={title}
                slugLink={slugLink}
                thumbnail={thumbnail}
            />
            <div className="article-item__content">
                { isShowCategories && <ArticleItemCategories categoriesId={categoriesId} /> }
                { isShowCategories && <ArticleItemStats viewCount={viewCount} /> }
                
                <ArticleItemTitle 
                    title={title} 
                    slugLink={slugLink}
                />

                { isShowDesc && (
                    <ArticleItemDesc 
                        shortDesc={shortDesc}
                    />
                ) }
                <ArticleItemInfor 
                    created={created}
                    authorId={authorId}
                    authorName={authorName}
                    authorLink={authorLink}
                    authorAvatar={authorAvatar}
                />
            </div>
        </article>
    )
}