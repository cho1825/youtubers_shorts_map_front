import "../css/SearchHeader.css";
import useHeadBackHook from "../../../hooks/useHeadBackHook.jsx";
import {useEffect, useState} from "react";
import useMapCoordinateStore from "../../../store/useMapCoordinateStore.js";

const SearchHeader = () => {
    const handleClick = useHeadBackHook();

    const [inputValue, setInputValue] = useState("");
    const {center} = useMapCoordinateStore();
    const setCenter = useMapCoordinateStore((state) => state.setCenter);
    const setIsPanto = useMapCoordinateStore((state) => state.setIsPanto);
    const setZoomLevel = useMapCoordinateStore((state) => state.setZoomLevel);

    const [pendingZoomLevel, setPendingZoomLevel] = useState(null);

    const searchDong = (event) => {
        if (event.key === "Enter" || event.type === "blur") {

            if (!window.kakao) {
                console.error("카카오맵이 아직 로드되지 않았습니다.");
                return;
            }

            const query = `대전 ${inputValue}`;

            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(query, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    console.log(`입력된 동: ${query}`);
                    console.log(`좌표: 위도(${result[0].y}), 경도(${result[0].x})`);
                    console.log(result);

                    setCenter({ lat: result[0].y, lng: result[0].x });
                    setIsPanto(true);

                    setPendingZoomLevel(6);
                    event.target.blur();
                    setInputValue(""); // 입력값 초기화

                } else {
                    console.error("주소 검색에 실패했습니다.");
                }
            });
        }
    };

    // 🔹 center가 변경되면 zoomLevel을 설정
    useEffect(() => {
        if (pendingZoomLevel !== null) {
            console.log("셋줌간다잉")
            setZoomLevel(pendingZoomLevel);
            setPendingZoomLevel(null); // 적용 후 초기화
        }
    }, [center, pendingZoomLevel]);

    return (
        <div className={"search-header"}>
            <div className={"image-container"} onClick={handleClick}>
                <img
                    src="/img/48.png"
                    alt="back"
                    className={"back-arrow"}
                />
            </div>
            <div className={"search-bar"}>
                <input
                    type={"text"}
                    placeholder={"동으로 검색해보세요!"}
                    className={"search-input"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={searchDong}
                    onBlur={(e)=>{
                        searchDong(e);
                        e.target.blur();
                    }}  // 모바일에서 키보드 완료 버튼 처리
                />
            </div>
        </div>
    );
}


export default SearchHeader;