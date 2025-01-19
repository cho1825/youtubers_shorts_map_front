import { create } from "zustand";

const useShowTextSectionStore = create((set) => ({
    // 초기 상태
    showTextSection: true,

    // 상태를 변경하는 액션
    setShowTextSection: (value) => set({ showTextSection: value }),

    changeShowTextSectionState: (navigate, setMapData)=>{
        set({showTextSection: true});
        setMapData(null);
        navigate("/");

        if (navigator.vibrate) {
            navigator.vibrate(200); // 200ms 동안 진동
        } else {
            console.log("Vibration API is not supported in this browser.");
        }
    }
}));

export default useShowTextSectionStore;
