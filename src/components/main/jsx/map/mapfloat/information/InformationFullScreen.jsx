import React from 'react';
import "../../../../css/InfoFullscreen.css"
import useMarkerInfoStore from "../../../../../../store/useMarkerInfoStore.js";

const InformationFullScreen = ({toggleFullScreen}) => {

    const markerInfo = useMarkerInfoStore((state) => state);

    return (
        <div className={"info-fullscreen"}>
            <div className={"info-fullscreen-header"}>
                <div
                    className="back-container"
                    onClick={toggleFullScreen}
                >
                    <img
                        src="/img/back_btnn.png"
                        alt="logo"
                        className={"backBtn-image"}
                    />
                </div>
                <div className={"text-container"}>
                    <h1 className={"name"}>{markerInfo.name}</h1>
                    <p className={"title"}>{markerInfo.videoTitle}</p>
                </div>

            </div>
            <div className={"info-fullscreen-content"}>
                <div className={"media-content"}>
                    <iframe width="378"
                            height="212"
                            src={`https://www.youtube.com/embed/${markerInfo.videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                    </iframe>
                </div>
                <div className={"info-content"}>
                    <div>
                        <p className="p">
                            <span className="info-content-img"
                                  style={{ backgroundImage: `url("/public/img/youtubeIcon.png")` }}
                            ></span>
                            <span>
                                유튜버 {markerInfo.youtuberNm}님 | {markerInfo?.publishedAt ? new Date(markerInfo.publishedAt).toISOString().split("T")[0] : "날짜 없음"}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="p">
                            <span className="info-content-img"
                                  style={{backgroundImage: `url("/public/img/icons8-위치-64.png")`}}
                            ></span>
                            <span>
                                    {markerInfo.roadAddress}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="p">
                            <span className="info-content-img"
                                  style={{backgroundImage: `url("/public/img/icons8-전화-96.png")`}}
                            ></span>
                            <span>
                                    <a href={`tel:${markerInfo.phoneNumber}`}
                                       style={{textDecoration: 'none', color: 'inherit'}}>
                                        {markerInfo.phoneNumber}
                                    </a>
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="p2">
                            <span className="info-content-img2"
                                  style={{backgroundImage: `url("/public/img/description2.png")`}}
                            ></span>
                            <span className="info-content-text">
                                {markerInfo.description}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={"info-fullscreen-reply"}>
                {/*<input placeholder={"후기를 남겨주세요"}/>*/}
                {/*<button type={"button"}>제출하기</button>*/}
            </div>
        </div>
    );
};

export default InformationFullScreen;
