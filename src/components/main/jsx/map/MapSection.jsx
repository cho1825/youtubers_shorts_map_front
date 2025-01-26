import "../../css/MapSection.css"
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";
import React, {useEffect, useMemo, useRef, useState} from "react";
import { motion } from "framer-motion";
import CategoryFloatSection from "./mapfloat/category/CategoryFloatSection.jsx";
import InformationFloatSection from "./mapfloat/information/InformationFloatSection.jsx";
import useMarkerInfoStore from "../../../../store/useMarkerInfoStore.js";
import useMapInfoStore from "../../../../store/useMapInfoStore.js";
import useShowTextSectionStore from "../../../../store/useShowTextSectionStore.js";
import InformationModal from "./mapfloat/information/InformationModal.jsx";
import useInfoSheetHook from "../../../../hooks/useInfoSheetHook.jsx";

const MapSection = ({onZoomClick}) => {

    const mapData = useMapInfoStore((state) => state.mapData);
    const { showTextSection } = useShowTextSectionStore();

    const data = Array.isArray(mapData) ? mapData : [];

    const mapRef = useRef(null); // Map 객체 참조
    const { infoSheetRef, isClick, setIsClick } = useInfoSheetHook(); // 커스텀 훅 사용

    const [bounds, setBounds] = useState(null); // 현재 지도 범위를 저장
    const [zoomLevel, setZoomLevel] = useState(7); // 현재 줌 레벨 상태 저장

    const setYoutuberNm = useMapInfoStore((state) => state.setYoutuberNm);
    const setRegionCode = useMapInfoStore((state) => state.setRegionCode);
    const {getMapDataByApi} = useMapInfoStore();

    const markerInfo = useMarkerInfoStore((state) => state);


    const handleClick = async () => {
        try {
            //전역 상태 관리 스토어에 넣어줌
            onZoomClick();
            // getMapDataByApi가 성공할 때까지 기다림
            await getMapDataByApi(25, '맠카');
            setRegionCode(25);
            setYoutuberNm('맠카');
        } catch (error) {
            console.error("getMapDataByApi 호출 실패:", error);
        }
    };

    // 지도 범위가 변경될 때 호출
    const handleBoundsChanged = (map) => {
        setBounds(map.getBounds()); // 지도 현재 영역 정보를 저장
    };

    // 줌 레벨 변경 시 호출
    const handleZoomChanged = (map) => {
        setZoomLevel(map.getLevel()); // 현재 줌 레벨 업데이트
    };

    // 지도 범위 내 데이터 필터링
    const filteredData = useMemo(() => {
        if (!bounds) return data; // bounds가 설정되지 않으면 전체 데이터 반환
        return data.filter((location) => {
            const latLng = new kakao.maps.LatLng(location.latitude, location.longitude);
            return bounds.contain(latLng); // 지도 영역에 포함된 마커만 필터링
        });
    }, [bounds, data]);

// DOM 크기 변화 감지 및 지도 크기 재조정
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (mapRef.current) {
                mapRef.current.relayout(); // 지도 크기 재조정
            }
        });

        const container = document.querySelector(".map-container");
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) observer.unobserve(container);
        };
    }, []);




    const clickMarker = (marker) => {
        const info = marker.location;

        markerInfo.setAll({
            id: info.id,
            name: info.name,
            categoryGroupName: info.categoryGroupName,
            categoryName: info.categoryName,
            description: info.description,
            lotAddress: info.lotAddress,
            roadAddress: info.roadAddress,
            youtuberNm: info.youtuberNm,
            videoId: info.videoId,
            videoUrl: info.videoUrl,
            latitude: info.latitude,
            longitude: info.longitude,
            phoneNumber: info.phoneNumber,
            isClick: true,
            videoTitle: info.videoTitle,


        })
        setIsClick(true);
    }


    return (
        //맵 섹션 두개로 분리
        showTextSection ? (
            <motion.div
                key={showTextSection} // 상태 변화마다 초기화
                className='map-container'
                initial={{scale: 0}} // 가운데에서 작게 시작
                animate={{
                    // scale: 1, // 점점 커지며 나타남
                    scale: showTextSection ? 1 : 0.9, // expanded 상태에서 설정된 크기로 확대
                    rotate: showTextSection ? [0, 0, 5, 0] : [], // 다 나타난 후 한 번 기울어짐
                }}
                transition={{
                    duration: 1.2, // 전체 애니메이션 지속 시간
                    ease: "easeInOut",
                    times: [0, 0.7, 0.9, 1], // 애니메이션 구간 설정
                }}
                style={{
                    transformOrigin: "center", // 애니메이션의 중심 설정
                }}
                onClick={handleClick}
                onTouchStart={handleClick}
            >
                <div className='map-round'>
                    <Map
                        className="kakao-map"
                        center={{lat: 36.3504119, lng: 127.3845475}}
                        style={{
                            width: "95%",
                            height: "94%"
                        }}
                        level={7}
                        onBoundsChanged={handleBoundsChanged} // 지도 범위 변경 이벤트
                        onZoomChanged={handleZoomChanged} // 줌 레벨 변경 이벤트
                        onCreate={(map) => {
                            mapRef.current = map; // Map 객체 저장
                        }}
                    >
                        {filteredData.map((location) => (
                            <div key={location.id}>
                                <MapMarker
                                    position={{
                                        lat: location.latitude,
                                        lng: location.longitude,
                                    }}
                                    title={location.name}
                                    image={{
                                        src: location.categoryGroupName === "음식점"
                                            ? "/img/restaurnt.png"
                                            : "/img/cafe.png",
                                        size: {width: 50, height: 50},
                                        options: {offset: {x: 15, y: 15}},
                                    }}
                                />
                                {zoomLevel <= 5 && (
                                    <CustomOverlayMap
                                        position={{
                                            lat: location.latitude,
                                            lng: location.longitude,
                                        }}
                                        clickable={true}
                                    >
                                        <div className="custom-overlay always-visible">
                                            <span>{location.name}</span>
                                        </div>
                                    </CustomOverlayMap>
                                )}
                            </div>
                        ))}
                    </Map>
                </div>
            </motion.div>
        ) : (

            <motion.div
                className='map-container expanded'
                initial={{scale: 0.8}} // 가운데에서 작게 시작
                animate={{
                    // scale: 1, // 점점 커지며 나타남
                    scale: 1, // expanded 상태에서 설정된 크기로 확대
                    rotate: [], // 다 나타난 후 한 번 기울어짐
                }}
                transition={{
                    duration: 0.7, // 전체 애니메이션 지속 시간
                    ease: "linear",
                    times: [0, 0.7, 0.9, 1], // 애니메이션 구간 설정
                }}
                style={{
                    transformOrigin: "center", // 애니메이션의 중심 설정
                }}
            >
                <Map
                    className="kakao-map"
                    center={{lat: 36.3504119, lng: 127.3845475}}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    level={7}
                    onBoundsChanged={handleBoundsChanged} // 지도 범위 변경 이벤트
                    onZoomChanged={handleZoomChanged} // 줌 레벨 변경 이벤트
                    onCreate={(map) => {
                        mapRef.current = map; // Map 객체 저장
                    }}
                >
                    {filteredData.map((location) => (
                        <div key={location.id}>
                            <MapMarker
                                position={{
                                    lat: location.latitude,
                                    lng: location.longitude,
                                }}
                                title={location.name}
                                image={{
                                    src: location.categoryGroupName === "음식점"
                                        ? "/img/restaurnt.png"
                                        : "/img/cafe.png",
                                    size: {width: 50, height: 50},
                                    options: {offset: {x: 15, y: 15}},
                                }}
                                clickable={true}
                                onClick={() => {
                                    clickMarker({location});
                                }}
                            />
                            {zoomLevel <= 5 && (
                                <CustomOverlayMap
                                    position={{
                                        lat: location.latitude,
                                        lng: location.longitude,
                                    }}
                                    clickable={true}
                                >
                                    <div
                                        className="custom-overlay always-visible"
                                        onClick={() => {
                                            clickMarker({location});
                                        }}
                                    >
                                        <span>{location.name}</span>
                                    </div>
                                </CustomOverlayMap>
                            )}
                        </div>
                    ))}
                </Map>
                <CategoryFloatSection
                />
                {isClick && (
                    <InformationFloatSection ref={infoSheetRef}/>
                    // <BottomSheet ref={infoSheetRef}/>
                )}
                <InformationModal/>

            </motion.div>
        )

    );
}
export default MapSection;