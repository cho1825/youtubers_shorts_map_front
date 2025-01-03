import "./MainPage.css";
import HeaderSection from "../components/common/HeaderSection.jsx"
import MapSection from "../components/main/MapSection.jsx";
import MessageSection from "../components/main/MessageSection.jsx";
const MainPage = () => {

    return (
        <div className="container">

            <HeaderSection></HeaderSection>
            <MapSection></MapSection>
            <MessageSection></MessageSection>

        </div>


    );
};

export default MainPage;