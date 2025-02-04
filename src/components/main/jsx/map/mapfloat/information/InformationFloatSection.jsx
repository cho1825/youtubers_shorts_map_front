import React, {forwardRef, useState} from "react";
import { motion } from "framer-motion";
import "../../../../css/InformationFloatSection.css"
import useMarkerInfoStore from "../../../../../../store/useMarkerInfoStore.js";
import styled from "styled-components";
import InformationFullScreen from "./InformationFullScreen.jsx";

const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #DEE2E6;
  margin: auto;
`

const InformationFloatSection = forwardRef((props, infoSheetRef) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const markerInfo = useMarkerInfoStore((state) => state);

    const toggleFullScreen = () =>{
        setIsFullScreen((prevState) => !prevState);
    }

    // Variants for Framer Motion
    const variants = {
        initial: { y: "100%", opacity: 0 },
        open: { y: 0, opacity: 1 },
        fullScreen: { y: 0, height: "100vh", opacity: 1 },
        closed: { y: "100%", opacity: 0 },
    };


    return (
        <>
            <motion.div
                variants={variants}
                initial="initial"
                animate={isFullScreen ? "fullScreen" : "open"}
                exit="closed"
                transition={{ type: "spring",duration:1 ,stiffness: 100, damping: 20 }}
                ref={infoSheetRef}
                className={`information-float-section ${isFullScreen ? 'fullscreen' : ''}`}
            >

                {!isFullScreen ? (
                    <div>
                        <div className="drag-section">
                            {/*<Handle/>*/}
                        </div>
                        <div className="info-section">
                            <div className="info-text">
                                    <div className="main-text-box">
                                        <span className="place-name">{markerInfo.name}</span>
                                        <span className="place-category">{markerInfo.categoryName}</span>
                                    </div>
                                    <p className="into-title">유튜버 {markerInfo.youtuberNm} | {markerInfo.videoTitle}</p>
                                    <p className="sub-text-p">
                                        <span className="address-img"></span>
                                        <span>
                                            {markerInfo.roadAddress}
                                        </span>
                                    </p>
                                    <p className="sub-text-p">
                                        <span className="phone-img"></span>
                                        <span>
                                     {markerInfo.phoneNumber || '연락처 없음'}
                                </span>
                                    </p>
                                </div>
                                <div className="media-info">
                                    <img className="media-thumbnail"
                                         src={`https://img.youtube.com/vi/${markerInfo.videoId}/maxresdefault.jpg`}/>
                                </div>
                            </div>
                        <div className="additional-info-section">
                            <button
                                className="detail-btn"
                                onClick={toggleFullScreen}
                            >
                                <span className="detail-text">상세보기</span>
                                <span className="detail-img"></span>
                            </button>
                        </div>
                    </div>
                ): (
                        <InformationFullScreen
                            toggleFullScreen={toggleFullScreen}
                        />
                )
                }

            </motion.div>
        </>
    );
});

export default InformationFloatSection;