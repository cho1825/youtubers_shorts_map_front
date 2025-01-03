import "./MapSection.css"
import { Map } from "react-kakao-maps-sdk";

const MapSection = () => {

    return (
        <div className='map-container'>
            <div
                className="zoom-indicator-fixed"
            ></div>
            <div className="map-round">
                <Map className="kakao-map"
                     center={{lat: 36.3504119, lng: 127.3845475}}
                     style={{width: '95%', height: '94%'}}
                     level={7}
                />
            </div>
        </div>
    );
}
export default MapSection;