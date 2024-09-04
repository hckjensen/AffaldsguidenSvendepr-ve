import Logo from "./Logo";
import NavBar from "../Nav/NavBar";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.topHeader}>
                <Logo />
            </section>
            <NavBar />

        </header>
    );
}

export default Header;