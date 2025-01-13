import "./MainPage.css";
import HeaderSection from "../components/common/jsx/HeaderSection.jsx"
import MapSection from "../components/main/jsx/map/MapSection.jsx";
import MessageSection from "../components/main/jsx/explain/TextSection.jsx";

import {useState} from "react";

const MainPage = () => {

    const [showMessageSection, setShowMessageSection] = useState(true);
    const [mapData, setMapData] = useState(null);

    const personClick = () => {
        setShowMessageSection(false);
    }

    const getMapDataByApi = async (regionCode,youtuberNm,category) => {

        try{
                const response = await fetch(`http://192.168.0.177:8080/api/makers?regionCode=${regionCode}&youtuberNm=${youtuberNm}&category=${category}`,{
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Api 요청 실패: " + response.statusText);
            }

            const placeDtoList = await response.json();
            setMapData(placeDtoList);
        }catch (error){
            console.error("API 요청 중 에러 발생:", error);
            setMapData(null)
        }

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
                getMapDataByApi={getMapDataByApi}
            />
            {showMessageSection &&
                <MessageSection
                    onZoomClick={personClick}
                    setMapData={setMapData}
                    getMapDataByApi={getMapDataByApi}
                />
            }

        </div>


    );
};

export default MainPage;