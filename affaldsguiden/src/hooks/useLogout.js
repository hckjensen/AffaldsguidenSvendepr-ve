import { useContext } from 'react';
import { SupabaseContext } from '../providers/SupabaseProvider';
import { useAuth } from '../providers/AuthProvider';

const useLogout = () => {
    const supabase = useContext(SupabaseContext);
    const { logout } = useAuth();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout error:', error.message);
            return error.message;
        } else {
            logout(false);
            console.log('Logged out successfully');
            return null;
        }
    };

    return handleLogout;
};

export default useLogout;