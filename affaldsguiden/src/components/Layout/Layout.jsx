import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import PropTypes from 'prop-types';



const Layout = ({ children, heroImage }) => {


    return (


        <div className={styles.flexContainer}>
            <Header />
            <main>
                <div className={styles.gradientOverlay}>
                    <div
                        className={styles.outerGradient}>

                        <div
                            className={styles.innerGradient}
                            style={{
                                backgroundImage: heroImage
                                    ? `url(${heroImage})`
                                    : 'linear-gradient(180deg, rgba(216, 234, 219, 0.8) 0%, rgba(255, 255, 255, 0.8) 91%)'
                            }}
                        ></div>
                    </div>
                </div>

                <section className={styles.contentContainer}>
                    {children}
                </section>
            </main>
            <Footer />
        </div>

    )

}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    heroImage: PropTypes.string
}




export default Layout