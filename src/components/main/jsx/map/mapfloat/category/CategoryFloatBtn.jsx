import React from "react";
import "../../../../css/CategoryFloatBtn.css";

const CategoryFloatBtn = ({ categoryNm, category, isActive, onCategorySelect }) => {
    const handleClick = () => {
        onCategorySelect(category); // 부모 함수 호출
    };

    return (
        <button
            className={`floating-button ${isActive ? "active" : ""}`}
            onClick={handleClick}
            onTouchStart={handleClick}
        >
            {categoryNm}
        </button>
    );
};

export default CategoryFloatBtn;
