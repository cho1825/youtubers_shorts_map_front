import React from 'react';
import useMarkerInfoStore from "../../../../../../store/useMarkerInfoStore.js";

const Content = () => {

    const markerInfo = useMarkerInfoStore((state) => state);

    return (
        <div>
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
                <button className="detail-btn">
                    <span className="detail-text">상세보기</span>
                    <span className="detail-img"></span>
                </button>
            </div>
        </div>
    );
};

export default Content;
