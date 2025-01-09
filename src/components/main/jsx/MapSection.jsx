import "../css/MapSection.css"
import { CSSTransition } from 'react-transition-group';
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";
import {useEffect, useMemo, useRef, useState} from "react";


const MapSection = ({showMessageSection, setShowMessageSection, mapData}) => {
    const mapRef = useRef(null); // Map 객체 참조
    const data = Array.isArray(mapData) ? mapData : [];
    const [bounds, setBounds] = useState(null); // 현재 지도 범위를 저장
    const [zoomLevel, setZoomLevel] = useState(7); // 현재 줌 레벨 상태 저장


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


    return (
        <div className={`map-container ${showMessageSection ? '' : 'expanded'}`}>
            <div className={`map-round ${showMessageSection ? '' : 'expanded'}`}>
                <Map className="kakao-map"
                     center={{lat: 36.3504119, lng: 127.3845475}}
                     style={{width: '95%', height: '94%'}}
                     level={7}
                     onBoundsChanged={handleBoundsChanged} // 지도 범위 변경 이벤트
                     onZoomChanged={handleZoomChanged} // 줌 레벨 변경 이벤트
                     onCreate={(map) => {
                         mapRef.current = map; // Map 객체 저장
                     }}
                >
                    {filteredData.map((location) => (
                        <div >
                            <MapMarker
                                key={location.id}
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
                            {/* 마커 아래 텍스트 (줌 레벨 조건 추가) */}
                            {zoomLevel <= 5 && ( // 줌 레벨이 7 이하일 때만 표시
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
        </div>
    );
}
export default MapSection;