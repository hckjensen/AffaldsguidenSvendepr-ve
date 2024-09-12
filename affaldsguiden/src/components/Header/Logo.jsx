import LogoImg from "../../assets/Images/Logo.png"
import trashCan from "../../assets/Images/TrashCan.png"
import styles from './Header.module.scss'
import { useNavigate } from "react-router-dom"

const Logo = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.logo}>

            <img src={LogoImg} alt="Affaldsguiden logo" onClick={() => navigate('/')} />
            <img className={styles.icon} src={trashCan} alt="Affaldsguiden logo" />
        </div>
    );

}

export default Logo;