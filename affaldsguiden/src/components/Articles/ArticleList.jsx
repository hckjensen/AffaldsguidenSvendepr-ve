import styles from './Articles.module.scss';
import PropTypes from 'prop-types';
import { useArticles } from '../../providers/ContextProvider';

import ArticleCard from './ArticleCard';


const ArticleList = () => {

    const { articles, loading } = useArticles();
    document.title = "Artikler";


    return (
        <section className={styles.articleList}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                articles
                    .filter(article => article.is_news) // Filter out articles where is_news is false
                    .map(article => (
                        <ArticleCard article={article} key={article.id} />
                    ))
            )}
        </section>
    )
}

export default ArticleList;