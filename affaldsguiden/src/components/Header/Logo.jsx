import LogoImg from "../../assets/Images/Logo.png"
import trashCan from "../../assets/Images/TrashCan.png"
import styles from './Header.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>

            <img src={LogoImg} alt="Affaldsguiden logo" />
            <img className={styles.icon} src={trashCan} alt="Affaldsguiden logo" />
        </div>
    );

}

export default Logo;