import "./MainPage.css";
import HeaderSection from "../components/common/jsx/HeaderSection.jsx"
import MapSection from "../components/main/jsx/map/MapSection.jsx";
import TextSection from "../components/main/jsx/explain/TextSection.jsx";

import {useState} from "react";

const MainPage = () => {

    const [showTextSection, setShowTextSection] = useState(true);

    const personClick = () => {
        setShowTextSection(false);
    }
    return (
        <div className="container">

            <HeaderSection
                showTextSection={showTextSection}
                setShowTextSection={setShowTextSection}
            />
            <MapSection
                showTextSection={showTextSection}
            />
            {showTextSection &&
                <TextSection
                    onZoomClick={personClick}
                />
            }

        </div>


    );
};

export default MainPage;