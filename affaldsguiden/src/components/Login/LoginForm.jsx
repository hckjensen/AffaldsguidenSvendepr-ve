import styles from './LoginForm.module.scss';
import { SupabaseContext } from '../../providers/SupabaseProvider';
import { useAuth } from '../../providers/AuthProvider';
import { useContext, useState, useEffect } from 'react';
import useLogout from '../../hooks/useLogout';

const LoginForm = () => {
    const supabase = useContext(SupabaseContext);
    const { user, login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogout = useLogout();



    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                console.log('session', session);

                login(session.user);
            }
        };
        checkSession();
    }, [supabase]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setError(error.message);
            console.log('error', error);
        } else {
            login(data.user);
            console.log('Logged in successfully:', data);
        }

        setEmail('');
        setPassword('');
    };

    // const handleLogout = async () => {
    //     const { error } = await supabase.auth.signOut();
    //     if (error) {
    //         setError(error.message);
    //         console.log('error', error);
    //     } else {
    //         logout(false);
    //         console.log('Logged out successfully');
    //     }
    // };

    return (
        <div className={styles.loginForm}>
            {user ? (
                <div className={styles.logout}>
                    <p>Du er logget ind.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Indtast din email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Indtast dit password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default LoginForm;