import PropTypes from 'prop-types'
import styles from './ContentWrapper.module.scss'


const ContentWrapper = ({ children, title, subTitle }) => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.text}>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
            </div>
            {children}
        </section>
    )



}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default ContentWrapper