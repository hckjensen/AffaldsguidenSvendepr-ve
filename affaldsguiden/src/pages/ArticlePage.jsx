import Layout from "../components/Layout/Layout";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { Outlet, useParams } from 'react-router-dom';
import { useArticles } from '../providers/ContextProvider';

const ArticlePage = () => {
    const { slug } = useParams();
    const { articles, loading } = useArticles();



    // Find the article based on the slug
    const article = articles.find(article => article.slug === slug);



    // If loading, show a loading indicator
    if (loading) {
        return (
            <div>
                <Layout>
                    <ContentWrapper title="Loading...">
                        <p>Loading...</p>
                    </ContentWrapper>
                </Layout>
            </div>
        );
    }

    // If on the index page and not loading, show the index content
    if (!slug) {
        return (
            <div>
                <Layout>
                    <ContentWrapper title="Artikler">
                        <Outlet />
                    </ContentWrapper>
                </Layout>
            </div>
        );
    }

    // If article is not found, show a fallback UI
    if (!article) {
        return (
            <div>
                <Layout>
                    <ContentWrapper title="Article Not Found">
                        <p>The article you are looking for does not exist.</p>
                    </ContentWrapper>
                </Layout>
            </div>
        );
    }

    // If article is found, show the article detail content
    return (
        <div>
            <Layout>
                <ContentWrapper title={article.title}>
                    <Outlet />
                </ContentWrapper>
            </Layout>
        </div>
    );
}

export default ArticlePage;