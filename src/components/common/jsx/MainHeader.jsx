import "/src/components/common/css/MainHeader.css"
import {useNavigate} from "react-router-dom";
import useMapInfoStore from "../../../store/mapInfo.js";


const MainHeader = ({showTextSection,setShowTextSection}) => {
    const navigate = useNavigate();
    const {setMapData} = useMapInfoStore();

    const changeShowMessageSectionState = () => {
        setShowTextSection(true);
        setMapData(null);
        navigate("/");

        if (navigator.vibrate) {
            navigator.vibrate(200); // 200ms 동안 진동
        } else {
            console.log("Vibration API is not supported in this browser.");
        }
    }

    return(
        <div>
            <div className="image-conrtainer" onClick={changeShowMessageSectionState}>
                <img src="../../../../public/img/DaejeonMap2-logo-black.png" alt="logo" className="logo-image"/>
            </div>
            <div className="menu-icon">
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
            </div>
        </div>
    );
}

export default MainHeader;