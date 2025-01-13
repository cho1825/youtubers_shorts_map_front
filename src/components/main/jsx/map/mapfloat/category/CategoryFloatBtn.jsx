import React from "react";
import "../../../../css/MapFloatBtn.css";

const MapFloatBtn = ({ categoryNm, category, isActive, onCategorySelect }) => {
    const handleClick = () => {
        onCategorySelect(category); // 부모 함수 호출
    };

    return (
        <button
            className={`floating-button ${isActive ? "active" : ""}`}
            onClick={handleClick}
        >
            {categoryNm}
        </button>
    );
};

export default MapFloatBtn;
