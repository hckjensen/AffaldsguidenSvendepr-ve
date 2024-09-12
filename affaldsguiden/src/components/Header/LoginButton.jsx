import LoginDefault from '../../assets/Images/LoginButtonDefault.png'
import LoginHover from '../../assets/Images/LoginButtonHover.png'
import LogoutDefault from '../../assets/Images/LogoutButtonDefault.png'
import LogoutHover from '../../assets/Images/LogoutButtonHover.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import styles from './Header.module.scss';
import useLogout from '../../hooks/useLogout';

const LoginButton = () => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const handleLogout = useLogout();
    console.log('user', user);




    return (
        <div className={styles.loginButton}>
            {user ? (
                <div className={styles.loggedIn}>
                    <p>Du er logget ind som {user.email}</p>
                    <img
                        src={LogoutDefault}
                        alt="Logout"
                        onMouseOver={e => (e.currentTarget.src = LogoutHover)}
                        onMouseOut={e => (e.currentTarget.src = LogoutDefault)}
                        onClick={handleLogout}  // Logout the user    
                    />
                </div>
            ) : (
                <img
                    src={LoginDefault}
                    alt="Login"
                    onMouseOver={e => (e.currentTarget.src = LoginHover)}
                    onMouseOut={e => (e.currentTarget.src = LoginDefault)}
                    onClick={() => navigate('/login')}  // Redirect to login page    
                />
            )}
        </div>
    );

}

export default LoginButton;