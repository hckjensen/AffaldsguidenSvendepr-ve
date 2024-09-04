import styles from './Sorting.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const SectionCard = ({ section }) => {
    const navigate = useNavigate();

    const handleClick = () => { navigate(`/sortering/${section.title.toLowerCase()}`) }


    return (
        <fig
            onClick={handleClick}
            className={styles.sectionCard}
            style={{
                backgroundColor: `#${section.color}`,
                color: section.color === '#ffffff' ? 'black' : 'white'
            }}>
            <figcaption

            >
                <h3>{section.title}</h3>
            </figcaption>
            <img src={section.image_url} alt="" />
        </fig>
    )
}

SectionCard.propTypes = {
    section: PropTypes.object.isRequired
}


export default SectionCard