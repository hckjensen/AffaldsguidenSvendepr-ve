import LoginForm from "../components/Login/LoginForm";
import Layout from "../components/Layout/Layout";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";


const LoginPage = () => {

    document.title = 'Login';

    return (
        <div>
            <Layout>
                <ContentWrapper title="Login">

                    <LoginForm />
                </ContentWrapper>
            </Layout>
        </div>
    )

};

export default LoginPage