import Logo from "./Logo";
import NavBar from "../Nav/NavBar";
import LoginButton from "./LoginButton";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.topHeader}>
                <Logo />
                <LoginButton />
            </section>
            <NavBar />

        </header>
    );
}

export default Header;