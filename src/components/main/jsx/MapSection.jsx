import "../css/MapSection.css"
import { Map,MapMarker } from "react-kakao-maps-sdk";
import CheckBox from "./CheckBox.jsx";


const MapSection = ({showMessageSection, setShowMessageSection, mapData}) => {

    const data = Array.isArray(mapData) ? mapData : [];

    return (
        <div className={`map-container ${showMessageSection ? '' : 'expanded'}`}>
            <div>
                {/*<CheckBox*/}
                {/*    showMessageSection={showMessageSection}*/}
                {/*    setShowMessageSection={setShowMessageSection}*/}
                {/*/>*/}
            </div>
            <div className="map-round">
                <Map className="kakao-map"
                     center={{lat: 36.3504119, lng: 127.3845475}}
                     style={{width: '95%', height: '94%'}}
                     level={6}
                >
                    {data.map((location) => (
                        <MapMarker
                            key={location.id}
                            position={{
                                lat: location.latitude,
                                lng: location.longitude,
                            }}
                            title={location.name}
                        />
                    ))}

                </Map>
            </div>
        </div>
    );
}
export default MapSection;