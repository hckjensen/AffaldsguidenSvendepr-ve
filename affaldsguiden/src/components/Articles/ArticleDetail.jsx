import styles from './Articles.module.scss';
import PropTypes from 'prop-types';
import { useArticles } from '../../providers/ContextProvider';
import { SupabaseContext } from '../../providers/SupabaseProvider';
import { useParams } from 'react-router-dom';



const ArticleDetail = () => {
    const { articles, loading } = useArticles();
    const { slug } = useParams();

    console.log('Articles:', articles);
    console.log('Article Slug:', slug);


    const article = articles.find(article => article.slug === slug);

    console.log('Article:', article);
    document.title = article.title;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            "Januar", "Februar", "Marts", "April", "Maj", "Juni",
            "Juli", "August", "September", "Oktober", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day}. ${month.toLowerCase()} ${year}`;
    };


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className={styles.articleDetail}>
                    <h1>{article.teaser}</h1>
                    <h3>{formatDate(article.published_at)}</h3>
                    <img src={article.image_url} alt="" />
                    <div dangerouslySetInnerHTML={{ __html: article.html_content }}
                        className={styles.articleContent}
                    />
                </section>
            )}
        </>
    )
}

export default ArticleDetail;