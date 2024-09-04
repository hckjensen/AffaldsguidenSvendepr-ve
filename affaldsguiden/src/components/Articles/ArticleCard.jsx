import styles from './Articles.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const ArticleCard = ({ article }) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/artikler/${article.slug.toLowerCase()}`) }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            "Januar", "Februar", "Marts", "April", "Maj", "Juni",
            "Juli", "August", "September", "Oktober", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day}. ${month} ${year}`;
    };

    return (
        <figure
            onClick={handleClick}
            className={styles.articleCard}
        >
            <img src={article.image_url} alt="" />
            <figcaption>
                <h3>{article.title}</h3>
                <p>{formatDate(article.published_at)}</p>
                <p>{article.teaser}</p>
                <p className={styles.readMore}>Læs mere »</p>
            </figcaption>
        </figure>
    )
}

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
}


export default ArticleCard;