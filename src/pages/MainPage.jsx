import "./MainPage.css";
import HeaderSection from "../components/common/jsx/HeaderSection.jsx"
import MapSection from "../components/main/jsx/map/MapSection.jsx";
import TextSection from "../components/main/jsx/explain/TextSection.jsx";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import useShowTextSectionStore from "../store/useShowTextSectionStore.js";
import useRecommendersStore from "../store/useRecommendersStore.js";
import {useNavigate} from "react-router-dom";
import useMapInfoStore from "../store/useMapInfoStore.js";

const MainPage = () => {

    const { showTextSection, setShowTextSection, changeShowTextSectionState } = useShowTextSectionStore();
    const {getRecommendersDataByApi} = useRecommendersStore();
    const { setMapData } = useMapInfoStore();
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [loadingImage, setLoadingImage] = useState("");
    const navigate = useNavigate(); // React Router의 네비게이션 기능

    const personClick = () => {
        setShowTextSection(false);
        history.pushState(null, null, location.href); // 뒤로가기 히스토리 추가
    }

    useEffect( () => {
        const randomImage = Math.random() < 0.5 ? "/img/DaejeonMap2-logo-black.png" : "/img/DaejeonMap2-logo-black.png";
        setLoadingImage(randomImage);

        const fetchData = async ()=> {
            await getRecommendersDataByApi();
            // 10초 후에 데이터 로드 완료 상태로 설정
            setTimeout(() => {
                setIsDataLoaded(true);
            }, 2000);
        }
        fetchData();

    }, [isDataLoaded]);

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault(); // 기본 뒤로가기 방지

            if (!showTextSection) {
                console.log("뒤로가기 버튼이 눌렸습니다.");
                changeShowTextSectionState(navigate, setMapData);
                history.pushState(null, null, location.href); // 다시 히스토리 추가하여 뒤로가기 무력화
            } else {
                console.log("기본 뒤로가기 동작 실행");
                navigate(-1); // 기본 뒤로가기 실행
            }
        };

        // 페이지 로드 시 히스토리 추가 (뒤로가기 방지)
        history.pushState(null, null, location.href);
        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [showTextSection, changeShowTextSectionState, navigate]);


    if (!isDataLoaded) {
        return (
            <motion.div
                className="loadingContainer"
                initial={{ x: "-100%" }} // 좌측에서 시작
                animate={{ x: 0 }} // 화면 중앙으로 이동
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
                <motion.img
                    src={loadingImage}
                    alt="Loading..."
                    className="loadingImage"
                    animate={{
                        y: [0, -20, 0], // 위로 튀고 다시 내려오기
                    }}
                    transition={{
                        repeat: Infinity, // 무한 반복
                        repeatType: "loop",
                        duration: 1, // 반복 주기
                    }}
                />
            </motion.div>
        );
    }

    return (
        <div className="container">

            <HeaderSection/>
            <MapSection
                onZoomClick={personClick}
            />
            {showTextSection &&
                <TextSection
                    onZoomClick={personClick}
                />
            }

        </div>


    );
};

export default MainPage;