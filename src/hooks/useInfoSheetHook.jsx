import { useRef, useEffect, useState } from "react";

export default function useInfoSheetHook() {
    const infoSheetRef = useRef(null);
    const [isClick, setIsClick] = useState(false);

    //외부 클릭시 요소 삭제 기능
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (infoSheetRef.current && !infoSheetRef.current.contains(event.target)) {
                setIsClick(false); // 외부 클릭 시 닫기
            }
        };

        const handleTouchStart = (event) => {
            if (infoSheetRef.current && !infoSheetRef.current.contains(event.target)) {
                setIsClick(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleTouchStart);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);


    return {
        infoSheetRef,
        isClick,
        setIsClick,
    };
}

