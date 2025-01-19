import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "../../../../css/InformationFloatSection.css"
import useMarkerInfoStore from "../../../../../../store/useMarkerInfoStore.js";


const InformationFloatSection = forwardRef((props, ref) => {

    const markerInfo = useMarkerInfoStore((state) => state);

    return (


        <motion.div
            initial={{y:50, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{type:"spring", duration: 1}}
            ref={ref}
            className='information-float-section expanded'
        >
            <div className="drag-section">
                __
            </div>
            <div className="info-section">
                <div className="text-info">
                    <div className="text-box-main">
                        <span className="place-name">{markerInfo.name}</span>
                        <span className="place-category">{markerInfo.categoryName}</span>
                    </div>
                    <p className="text-box-sub">
                        <img
                            src="/img/icons8-가게-96.png"
                            className="small-img"
                        />
                        <span>{markerInfo.description}</span>
                    </p>
                    <p className="text-box-sub">
                        <img
                            src="/img/icons8-위치-64.png"
                            className="small-img"
                        />
                        <span>{markerInfo.roadAddress}</span>
                    </p>
                    <p className="text-box-sub">
                        <img
                            src="/img/icons8-전화-48.png"
                            className="small-img"
                        />
                        <span>{markerInfo.phoneNumber || '연락처 없음.'}</span>
                    </p>
                </div>
                <div className="media-info">
                    <img className="media-thumbnail"
                         src={`https://img.youtube.com/vi/${markerInfo.videoId}/maxresdefault.jpg`}/>
                </div>
            </div>
            <div className="additional-info-section">
                <button className="detail-btn">
                    <span className="detail-text">상세보기</span>
                    <span className="detail-img"></span>
                </button>
            </div>
        </motion.div>
    );
});

export default InformationFloatSection;