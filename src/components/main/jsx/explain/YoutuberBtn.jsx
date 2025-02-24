import { motion, useAnimation } from "framer-motion";

import "../../css/YoutuberBtn.css"
import useMapInfoStore from "../../../../store/useMapInfoStore.js";
import {useEffect} from "react";

const YoutuberBtn = ({name, count, onZoomClick, regionCode, youtuberNm}) => {
    const controls = useAnimation(); // 애니메이션 컨트롤러
    const setYoutuberNm = useMapInfoStore((state) => state.setYoutuberNm);
    const setRegionCode = useMapInfoStore((state) => state.setRegionCode);
    const {getMapDataByApi} = useMapInfoStore();

    const handleClick = async () => {
        try {
            //전역 상태 관리 스토어에 넣어줌
            onZoomClick();
            // getMapDataByApi가 성공할 때까지 기다림
            await getMapDataByApi(regionCode, youtuberNm);
            setRegionCode(regionCode);
            setYoutuberNm(youtuberNm);
        } catch (error) {
            console.error("getMapDataByApi 호출 실패:", error);
        }
    };

    // 버튼 애니메이션 반복 실행
    useEffect(() => {
        controls.start({
            scale: [1, 1.05, 1],
            transition: {
                duration: 2, // 한 번 커졌다 작아지는 데 걸리는 시간
                repeat: Infinity, // 무한 반복
                ease: "easeInOut", // 부드러운 움직임
            },
        });
    }, [controls]);

    return (
        <motion.button
                className="Btn"
                onClick={handleClick}
                onTouchStart={handleClick}
                animate={controls} // 애니메이션 컨트롤 연결
                whileHover={{ scale: 1.2 }} // 호버 시 더 커지는 효과
                whileTap={{ scale: 0.95 }} // 클릭 시 작아지는 효과
        >
            <span className="leftContainer">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff"><path
                d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"></path></svg>
            <span className="like">{name}</span>
            </span>
            <span className="likeCount">
            {count} 개
          </span>
        </motion.button>
    )
}

export default YoutuberBtn;
