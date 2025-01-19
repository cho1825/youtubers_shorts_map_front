import "/src/components/common/css/MainHeader.css"
import {useNavigate} from "react-router-dom";
import useMapInfoStore from "../../../store/useMapInfoStore.js";
import useShowTextSectionStore from "../../../store/useShowTextSectionStore.js";


const MainHeader = () => {
    const navigate = useNavigate();
    const {setMapData} = useMapInfoStore();
    const { changeShowTextSectionState } = useShowTextSectionStore();

    return(
        <div>
            <div className="image-conrtainer" onClick={()=>{
                changeShowTextSectionState(navigate, setMapData);
            }}>
                {/*<img src="../../../../public/img/DaejeonMap2-logo-black.png" alt="logo" className="logo-image"/>*/}
                <img src="/img/DaejeonMap2-logo-black.png" alt="logo" className="logo-image"/>
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