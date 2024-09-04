import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navItems = [
        { id: 1, title: 'forside', path: '/' },
        { id: 2, title: 'sorteringsguide', path: '/sortering' },
        { id: 3, title: 'genbrugstationer', path: '/genbrugstationer' },
        { id: 4, title: 'artikler', path: '/artikler' },
        { id: 5, title: 'bestil container', path: '/bestil-container' },


    ]

    return (
        <nav className={styles.navBar}>
            <ul className={styles.list}>
                {navItems.map(item => (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => isActive ? styles.active : ''}
                        key={item.id}
                    >
                        <li className={styles.listItem}>
                            {item.title}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </nav>
    )

}

export default NavBar;