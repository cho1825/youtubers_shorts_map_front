import "/src/components/common/css/MainHeader.css"
import {useNavigate} from "react-router-dom";
import useMapInfoStore from "../../../store/useMapInfoStore.js";
import useShowTextSectionStore from "../../../store/useShowTextSectionStore.js";
import {useCallback, useEffect, useState, useTransition} from "react";


const MainHeader = () => {
    const navigate = useNavigate();
    const {setMapData} = useMapInfoStore();
    const { showTextSection, setShowTextSection, changeShowTextSectionState } = useShowTextSectionStore();

    const [isLoading, setIsLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(showTextSection ? "/img/DaejeonMap2-logo-black.png" : "/img/48.png");
    const [isPending, startTransition] = useTransition();


    useEffect(() => {
        setIsLoading(true);
        const img = new Image();
        img.src = showTextSection ? "/img/DaejeonMap2-logo-black.png" : "/img/48.png";
        img.onload = () => {
            startTransition(() => {
                setImageSrc(img.src);
                setIsLoading(false);
            });
        };
    }, [showTextSection]);

    const handleClick = useCallback(() => {
        changeShowTextSectionState(navigate, setMapData);
        setShowTextSection(true);
    }, [changeShowTextSectionState, navigate, setMapData, setShowTextSection]);

    return (
        <div className="main-header">
            <div className="image-container" onClick={handleClick}>
                <img
                    src={imageSrc}
                    alt="logo"
                    className={isLoading ? "loading" : "loaded"}
                />
            </div>
        </div>
    );
}


export default MainHeader;