import styles from './Footer.module.scss';
import SoMe from '../../assets/Images/SocialMedia.png'
import Stores from '../../assets/Images/AppStores.png'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <h2>Affaldsguiden</h2>
                <p>Øster Uttrupvej 1A</p>
                <p>9000 Aalborg</p>
            </section>
            <section>
                <img src={Stores} alt="app stores" />
            </section>
            <section>
                <img src={SoMe} alt="social media" />
            </section>
        </footer>
    )
}

export default Footer;