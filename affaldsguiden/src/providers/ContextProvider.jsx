import { useEffect, createContext, useContext, useState } from 'react';
import { SupabaseContext } from './SupabaseProvider.jsx';
import PropTypes from 'prop-types';

const SectionsContext = createContext();
const ArticlesContext = createContext();

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


export const ArticlesProvider = ({ children }) => {

    const supabase = useContext(SupabaseContext);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const { data, error } = await supabase
                .from('articles')
                .select('*')

            if (error) {
                console.error(error);
            } else {
                setArticles(data);
                setLoading(false);
            }
        };
        fetchArticles();
    }, [supabase]);

    return (
        <ArticlesContext.Provider value={{ articles, loading }}>
            {children}
        </ArticlesContext.Provider>
    );



}

export const useArticles = () => {
    return useContext(ArticlesContext);
}


ArticlesProvider.propTypes = { children: PropTypes.node.isRequired };









