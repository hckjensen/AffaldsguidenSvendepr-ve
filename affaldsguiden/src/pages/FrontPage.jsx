import Layout from "../components/Layout/Layout";
import heroImg from "../assets/Images/malerspande.jpg";


const FrontPage = () => {
    document.title = 'Forside';
    return (
        <div>
            <Layout heroImage={heroImg}>



            </Layout>


        </div>
    );
}

export default FrontPage;