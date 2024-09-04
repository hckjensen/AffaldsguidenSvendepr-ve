import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import PropTypes from 'prop-types';



const Layout = ({ children }) => {


    return (


        <div className={styles.flexContainer}>
            <Header />
            <main>
                <div className={styles.gradientOverlay}><div className={styles.outerGradient}>
                    <div className={styles.innerGradient}>
                    </div>
                </div></div>

                <section className={styles.contentContainer}>
                    {children}
                </section>
            </main>
            <Footer />
        </div>

    )

}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}




export default Layout