import "../css/HeaderSection.css";
import MainHeader from "./MainHeader.jsx";

const HeaderSection = ({showMessageSection,setShowMessageSection,mapData,setMapData}) => {
    return (
        <div className="header-container">
            <MainHeader
                showMessageSection={showMessageSection}
                setShowMessageSection={setShowMessageSection}
                mapData={mapData}
                setMapData={setMapData}
            />
        </div>
    );

}

export default HeaderSection;