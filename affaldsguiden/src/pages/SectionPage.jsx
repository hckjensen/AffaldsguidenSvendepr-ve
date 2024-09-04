import Layout from "../components/Layout/Layout";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { Outlet, useParams } from 'react-router-dom';



const SectionPage = () => {

    const { sectionName } = useParams();
    document.title = 'Sorteringsguide';

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div>
            <Layout>
                {sectionName ? (
                    <ContentWrapper
                        title={capitalizeFirstLetter(sectionName)}
                        subTitle="Vælg en kategori"
                    >
                        <Outlet />
                    </ContentWrapper>
                ) : (
                    <ContentWrapper
                        title="Sorteringsguide"
                        subTitle="Vælg en sektion"
                    >
                        <Outlet />
                    </ContentWrapper>
                )}

            </Layout>
        </div>
    );
}

export default SectionPage;