import { useParams } from 'react-router-dom';
import styles from './Sorting.module.scss';
import { useEffect, useState, useContext } from 'react';
import { SupabaseContext } from '../../providers/SupabaseProvider';
import { useSections } from '../../providers/ContextProvider';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
    const supabase = useContext(SupabaseContext);
    const { sections } = useSections();
    const { sectionName } = useParams();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Find the section object where the title matches the sectionName (case-insensitive)
    const section = sections.find(section => section.title.toLowerCase() === sectionName.toLowerCase());
    // Extract the id from the found section object
    const sectionId = section ? section.id : null;

    console.log('Sections:', sections);
    console.log('Section ID:', sectionId);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('trash_categories')
                .select('*')
                .eq('section_id', sectionId);

            if (error) {
                console.error(error);
            } else {
                setCategories(data);
            }
            setLoading(false);
        };
        if (sectionId) {
            fetchCategories();
        }
    }, [supabase, sectionId]);

    console.log('Categories:', categories);

    return (
        <>
            <section className={styles.categoryList}>
                {loading ? (
                    // Render placeholder CategoryCards while loading
                    Array.from({ length: 2 }).map((_, index) => (
                        <CategoryCard key={index} category={{}} loading={true} />
                    ))
                ) : (
                    categories.map(category => (
                        <CategoryCard category={category} key={category.id} loading={false} />
                    ))
                )}
            </section>
        </>
    );
}

export default CategoryList;