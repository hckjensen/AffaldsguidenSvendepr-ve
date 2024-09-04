import { useEffect, createContext, useContext, useState } from 'react';
import { SupabaseContext } from './SupabaseProvider.jsx';
import PropTypes from 'prop-types';

const SectionsContext = createContext();

export const SectionsProvider = ({ children }) => {

    const supabase = useContext(SupabaseContext);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSections = async () => {
            const { data, error } = await supabase
                .from('trash_sections')
                .select('*')

            if (error) {
                console.error(error);
            } else {
                setSections(data);
                setLoading(false);
            }
        };
        fetchSections();
    }, [supabase]);

    return (
        <SectionsContext.Provider value={{ sections, loading }}>
            {children}
        </SectionsContext.Provider>
    );

};

export const useSections = () => {
    return useContext(SectionsContext);
}

SectionsProvider.propTypes = { children: PropTypes.node.isRequired };


