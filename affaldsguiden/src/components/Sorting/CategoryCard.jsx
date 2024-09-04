import styles from './Sorting.module.scss';
import PropTypes from 'prop-types';

const CategoryCard = ({ category, loading }) => {
    return (
        <section className={styles.categoryCard}>
            {loading ? (
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}></div>
                </div>
            ) : (
                <div className={styles.leftDiv}>
                    <div className={styles.imgContainer}>
                        <img src={category.icon_url} alt="" />
                    </div>
                    <h3>{category.title}</h3>
                </div>
            )}
        </section>
    );
}

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired,
    loading: PropTypes.bool
}

export default CategoryCard;