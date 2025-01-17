import { motion } from "framer-motion";
import CategoryFloatBtn from "./CategoryFloatBtn.jsx";
import "../../../../css/CategoryFloatSection.css";
import { useState } from "react";
import useMapInfoStore from "../../../../../../store/mapInfo.js";

const CategoryFloatSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    // 전역 상태
    const regionCode = useMapInfoStore((state) => state.regionCode);
    const youtuberNm = useMapInfoStore((state) => state.youtuberNm);
    const setCategory = useMapInfoStore((state) => state.setCategory);
    const {getMapDataByApi} = useMapInfoStore();

    // 공통 데이터 전달 함수
    const handleCategorySelect = async (category) => {
        try {
            await getMapDataByApi(regionCode, youtuberNm, category);
            setCategory(category); // 전역 상태 업데이트
            setActiveCategory(category); // 로컬 상태 업데이트
        } catch (error) {
            console.error("getMapDataByApi 호출 실패:", error);
        }
    };

    return (
        <motion.div
            className="floating-div"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {[
                { categoryNm: "몽땅", category: "all" },
                { categoryNm: "음식점", category: "restaurant" },
                { categoryNm: "카페", category: "cafe" },
            ].map(({ categoryNm, category }) => (
                <CategoryFloatBtn
                    key={category}
                    categoryNm={categoryNm}
                    category={category}
                    isActive={activeCategory === category}
                    onCategorySelect={handleCategorySelect} // 카테고리 변경 함수 전달
                />
            ))}
        </motion.div>
    );
};

export default CategoryFloatSection;
