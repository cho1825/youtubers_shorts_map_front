import "/src/components/common/css/MainHeader.css"
import {useNavigate} from "react-router-dom";
import useMapInfoStore from "../../../store/useMapInfoStore.js";
import useShowTextSectionStore from "../../../store/useShowTextSectionStore.js";


const MainHeader = () => {
    const navigate = useNavigate();
    const {setMapData} = useMapInfoStore();
    const { changeShowTextSectionState } = useShowTextSectionStore();
    const { showTextSection } = useShowTextSectionStore();
    const { setShowTextSection } = useShowTextSectionStore();


    return (
        <div className="main-header">
            <div
                className="image-container"
                onClick={() => {
                    changeShowTextSectionState(navigate, setMapData);
                    setShowTextSection(true);
                }}
            >
                <img
                    src={showTextSection ? "/img/DaejeonMap2-logo-black.png" : "/img/back_btnn.png"}
                    alt="logo"
                    className={showTextSection ? "logo-image" : "backBtn-image"}
                />
            </div>
            {/*<div className="menu-icon">*/}
            {/*    <img src="/img/ham.png" alt="logo" className="menu-image" />*/}
            {/*</div>*/}
        </div>
    );
}

export default MainHeader;