import "./MainPage.css";
import HeaderSection from "../components/common/jsx/HeaderSection.jsx"
import MapSection from "../components/main/jsx/MapSection.jsx";
import MessageSection from "../components/main/jsx/MessageSection.jsx";

import {useState} from "react";

const MainPage = () => {

    const [showMessageSection, setShowMessageSection] = useState(true);
    const [mapData, setMapData] = useState(null);

    const personClick = () => {
        setShowMessageSection(false);
    }

    return (
        <div className="container">

            <HeaderSection
                showMessageSection={showMessageSection}
                setShowMessageSection={setShowMessageSection}
                mapData={mapData}
                setMapData={setMapData}
            />
            <MapSection
                showMessageSection={showMessageSection}
                setShowMessageSection={setShowMessageSection}
                mapData={mapData}
            />
            {showMessageSection &&
                <MessageSection
                    onZoomClick={personClick}
                    setMapData={setMapData}
                />
            }

        </div>


    );
};

export default MainPage;