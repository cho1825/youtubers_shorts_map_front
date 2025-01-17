import "../css/HeaderSection.css";
import MainHeader from "./MainHeader.jsx";

const HeaderSection = ({showTextSection,setShowTextSection}) => {
    return (
        <div className="header-container">
            <MainHeader
                showTextSection={showTextSection}
                setShowTextSection={setShowTextSection}
            />
        </div>
    );

}

export default HeaderSection;