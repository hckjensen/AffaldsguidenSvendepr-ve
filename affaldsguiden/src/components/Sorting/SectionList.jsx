import styles from './Sorting.module.scss';
import { useSections } from '../../providers/ContextProvider';
import SectionCard from './SectionCard';


const SectionList = () => {
    const { sections } = useSections();

    return (
        <section className={styles.sectionList}>
            {sections.map(section => (
                <SectionCard section={section} key={section.id} />
            ))}
        </section>
    )

}

export default SectionList;